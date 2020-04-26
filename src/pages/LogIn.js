import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import homeVisual from '../assets/img/home-visual.png'
import { Button } from '../components/Button'

export const LogIn = () => {
    return(
        <SignUpContainer>
            <SignUpModal>
                <Header>
                    Log In
                </Header>
                <Subtext>
                    Log in to manage your account
                </Subtext>
                <Input placeholder="Email address" />
                <Input placeholder="Password" />
                <ButtonContainer>
                 <SignUpButton buttonText="Log in" primary/>
                </ButtonContainer>
            </SignUpModal>
            <SignUpModal className="last">
            <Header>
                    Don't have an account?
                </Header>
                <ButtonContainer>
                    <Link to={"/signup"}>
                         <SignUpButton buttonText="Sign up" primary/>
                    </Link>
                </ButtonContainer>
            </SignUpModal>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`

const SignUpModal = styled.div`
    background: white;
    ${props => props.theme.elements.shadow};
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    border-radius: ${props => props.theme.elements.borderRadius};
    text-align: center;
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