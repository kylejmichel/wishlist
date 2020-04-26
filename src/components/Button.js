import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { IoIosPerson } from "react-icons/io";

export const Button = ({buttonText, className, primary, login}) => {

    const ButtonOuter = styled.div`
    background: ${props => primary ? "#000" : "#fff"};
    height: 40px;
    border-radius: 999px;
    color: ${props => primary ? "#fff" : "#000"};
    width: ${props => login ? "40px" : "150px"};
    text-align: center;
    line-height: 40px;
    padding: 5px;
    font-weight: bold;
    ${props => props.theme.elements.shadow};
    cursor: pointer;
    ${props => login ? "display: flex;justify-content: center;align-items: center;" : ""};
    transition: background .3s ease, color .3s ease;
    &:hover {
        background-color: ${props => primary ? "#fff" : "#000"};
        color:${props => primary ? "#000" : "#fff"};
        text-decoration: none;
    }
`

    return(
        <ButtonOuter className={className}>
            <div test="test"></div>
            {buttonText}
            { login ? <IoIosPerson /> : ""}
        </ButtonOuter>
    )
}
