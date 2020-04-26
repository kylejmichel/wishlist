import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { Button } from './Button';

export const QuantitySelector = ({className, quantity, adjustQuantity}) => {
    return(
        <QuantityWrapper class={className}>
            <Adjust className="minus" onClick={(direction) => adjustQuantity("minus")}>
                -
            </Adjust>
            <Total>
                {quantity}
            </Total>
            <Adjust onClick={(direction) => adjustQuantity("plus")}>
                +
            </Adjust>
        </QuantityWrapper>
    )
}

const QuantityWrapper = styled.div`
${props => props.theme.elements.shadow};
width: unset;
padding: 0px;
background: white;
width: 75%;
display: flex;
flex: 0 0 33.3%;
color: black;
height: 40px;
line-height: 40px;
border-radius: 20px;
`
const Adjust = styled.div`
   flex: 1;
   text-align: center;
   font-size: 20px;
   cursor: pointer;
   &.minus {
       font-size: 25px;
   }
`
const Total = styled.div`
    background: white;
    height: 45px;
    width: 45px;
    transform: translateY(-2.5px);
    ${props => props.theme.elements.shadow};
    border-radius: 30px;
    line-height: 45px;
    text-align: center;
    font-weight: bold;
`



