import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { TitleSection } from '../components/TitleSection';
import { MarketItem } from "../components/MarketItem";

export const FilterItems = ({filterFunction}) => {


    const categories = [{
        name: 'hygeine',
        color: '#e4f7ff'
    },
    {
        name: 'food',
        color: '#ecffd9'
    }]

    return(
        <FilterContainer>
            <FilterLabel>
                Filter
            </FilterLabel>
            <ScrollContainer>
                {categories.map((category) =>
                    <FilterSelector onClick={e => filterFunction(category.name)} id={category.name} className="filterSection">
                        <FilterColor fill={category.color} />
                        <div>{category.name}</div>
                    </FilterSelector>
                )}
            </ScrollContainer>

        </FilterContainer>
    )
}

const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 50px 0;
    align-items: center;
`

const FilterSelector = styled.div`
    background: white;
    height: 40px;
    ${props => props.theme.elements.shadow}
    border-radius: 40px;
    line-height: 40px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    margin-right: 20px;
    cursor: pointer;
    transition: opacity .3s;
`

const FilterLabel = styled.div`
    font-weight: bold;
    margin-right: 20px;
`

const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: ${props => props.fill};
    margin-right: 10px;
    
`
const ScrollContainer = styled.div`
overflow-x: scroll;
overflow-y: visible;
display: flex;
padding: 5px;
::-webkit-scrollbar { display: none !important }
`