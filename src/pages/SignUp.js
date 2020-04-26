import React, { useState, useContext, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import homeVisual from '../assets/img/home-visual.png';
import { Button } from '../components/Button';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { GoogleLocationSearch } from "../components/GoogleLocationSearch";

export const SignUp = () => {

    return(
        <SignUpContainer>
            <SignUpModal>
                <Header>
                    Sign up
                </Header>
                <Subtext>
                    Please enter your information to create an account
                </Subtext>
                <Input placeholder="Full name" />
                <Input placeholder="Email address" />
                <GoogleLocationSearch placeholder={"Where do you live?"} />
                <Input placeholder="Password" />
                <Input placeholder="Confirm password" />
                <ButtonContainer>
                 <SignUpButton buttonText="Sign up" primary/>
                </ButtonContainer>
            </SignUpModal>
            <SignUpModal className="last">
            <Header>
                    Registering an organization?
                </Header>
                <Subtext>
                    Our organization review process is simple! Click the button below to begin.
                </Subtext>
                <ButtonContainer>
                    <Link to={"/signuporg"}>
                         <SignUpButton buttonText="Register" primary/>
                    </Link>
                </ButtonContainer>
            </SignUpModal>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    display: flex;
    flex: 2 1 50%;
    flex-direction: column;
    justify-content:center;
`

const SignUpModal = styled.div`
    position: relative;
    background: white;
    ${props => props.theme.elements.shadow};
    padding: 30px;
    border-radius: ${props => props.theme.elements.borderRadius};
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    &.last {
        margin-top: 40px;
    }
    ${breakpoint('lg')`
    width: 30%;
     `}
`

const Header = styled.h1`
    color: ${props => props.theme.colors.primary};
`

const Subtext = styled.p`
    line-height: 1.5em;
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

const SignUpButton = styled(Button)`
    margin-top: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Link = styled(NavLink)`
    display: flex;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    align-items: center;
    justify-content: center;
    &.right {
        margin-right: 10px;
    }
    &.left {
        margin-left: 10px;
    }
`
