import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';

export const Bookmark = ({fill, className}) => {

    return(
        <svg width="25" height="61" viewBox="0 0 25 61" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} >
            <path d="M0 61V19H25V61L12.7451 51.9483L0 61Z" fill={fill}/>
            <path d="M0 3C0 1.34315 1.34315 0 3 0H22C23.6569 0 25 1.34315 25 3V23H0V3Z" fill={fill}/>
        </svg>
    )
}
