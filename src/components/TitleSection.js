import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';

export const TitleSection = ({titleText}) => {
    return(
        <Title>
            <LargeText>{titleText}</LargeText>
        </Title>
    )
}

const Title = styled.div`
    height: calc(${props => props.theme.fullHeight} * .1);
    text-align:center;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
`

const LargeText = styled.h1`

${breakpoint('xs')`
font-size: 32px;
 `}

 ${breakpoint('s')`
font-size: 36px;
 `}

${breakpoint('md')`
font-size: 40px;
 `}

 ${breakpoint('lg')`
font-size: 44px;
 `}

${breakpoint('xl')`
font-size: 48px;
 `}
`
