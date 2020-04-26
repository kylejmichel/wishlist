import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import homeVisual from '../assets/img/home-visual.png';
import { Button } from '../components/Button';
import { GoogleLocationSearch } from "../components/GoogleLocationSearch";

export const SignUpOrg = () => {
    return(
        <SignUpContainer>
            <SignUpModal>
                <Header>
                    Register an organization
                </Header>
                <Subtext>
                    To register an organization, please fill out the form below.
                </Subtext>
                <Input placeholder="Your name" />
                <Input placeholder="Your email" />
                <Input placeholder="Organization name" />
                <GoogleLocationSearch placeholder="Location of organization" />
                <Input placeholder="Organization website" />
                <ButtonContainer>
                 <SignUpButton buttonText="Register" primary/>
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
    flex: .3;
    flex-grow: .3;
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