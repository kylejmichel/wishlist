import React, { useState, useContext, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import homeVisual from '../assets/img/home-visual.png';
import { Button } from '../components/Button';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { render } from "@testing-library/react";

export const GoogleLocationSearch = ({ placeholder }) => {

const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: document.getElementById('location'),
    debounce: 300
  });
  const locationInput = useRef();
  useOnclickOutside(locationInput, () => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('📍 Coordinates: ', { lat, lng });
      }).catch(error => {
        console.log('😱 Error: ', error)
      });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <LocationItem
          key={id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </LocationItem>
      );
    });

    return(
        <div ref={locationInput}>
                <Input placeholder={placeholder} id="location" value={value}
        onChange={handleInput}
        disabled={!ready}
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <LocationContainer>{renderSuggestions()}</LocationContainer>}
                </div>
    )


}

const LocationContainer = styled.div`
position: absolute;
width: calc(100% - 60px);
background: white;
box-sizing: border-box;
border-radius: ${props => props.theme.elements.borderRadius};
${props => props.theme.elements.shadow}
overflow: hidden;
`

const LocationItem = styled.div`
text-align: left;
padding: 10px 20px;
cursor: pointer;
transition: background .3s ease;
strong {
    display: block;
}
small {
    display: block;
    color: ${props => props.theme.colors.lightGray};
    text-transform: uppercase;
    font-weight: bold;
    font-size : ${props => props.theme.fontSizes.small};
    margin-top: 5px;
}
&:hover {
    background: ${props => props.theme.colors.palette.first};
}
`

const Input = styled.input`
    margin-top: 30px;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    padding: 30px;
    box-sizing: border-box;
    ${props => props.theme.elements.innerShadow}
    border: none;
    font-size: ${props => props.theme.fontSizes.small};
`
