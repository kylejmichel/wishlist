import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { Button } from './Button';

export const ProgressBar = ({className, currentAmount, goalAmount}) => {

    const Progress = styled.div`
    height: 5px;
    width: ${currentAmount / goalAmount * 100}%;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    border-radius: 2.5px;
`

    const Goal = styled.div`
    height: 5px;
    background: ${props => props.theme.colors.lightGray};
    opacity: .2;
    width: 100%;
    position: absolute;
    border-radius: 2.5px;
    `

    const Indicator = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid ${props => props.theme.colors.lightGray};
    left: calc(${currentAmount / goalAmount * 100}% - 6px);
    top: -15px;
    `

    const FulfilledText = styled.div`
    font-family: ${props => props.theme.fonts.primary};
    font-weight: bold;
    font-style: italic;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.lightGray};
    position: absolute;
    left: ${currentAmount / goalAmount * 100}%;
    transform: translatex(-50%);
    top: 15px;
`

    const GoalText = styled.div`
    font-family: ${props => props.theme.fonts.primary};
    font-weight: bold;
    font-style: italic;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.lightGray};
    position: absolute;
    right: 0;
    top: 15px;
    `

    return(
        <ProgressBarWrapper className={className}>
            <Goal />
            <Progress />
            <Indicator />
            <FulfilledText>
                {currentAmount} fulfilled
            </FulfilledText>
            <GoalText>
                {goalAmount} needed
            </GoalText>
        </ProgressBarWrapper>
    )
}

const ProgressBarWrapper = styled.div`
    position: relative;
    height: 10px;
`

