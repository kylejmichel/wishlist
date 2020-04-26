import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import homeVisual from '../assets/img/home-visual.png'
import { Button } from '../components/Button'

export const Home = () => {
    return(
        <HeroContainer>
            <HeroVisualContainer>
                <HeroVisual src={homeVisual} />
            </HeroVisualContainer>
            <HeroTextContainer className="first">
                <HeroTextModal>
                    <HeroTextHeader>
                        Connecting people to organizations
                    </HeroTextHeader>
                    <HeroSubtext>
                        Our mission is to connect the consumer to shelters or organizations fighting homelessness. We were founded on transparency and you see exactly where your money goes. 
                    </HeroSubtext>
                </HeroTextModal>
                <HeroTextModal>
                    <HeroSubhead>
                        Ready to get started?
                    </HeroSubhead>
                    <HeroSubtext>
                        Start by seeing how you can help or by signing up
                    </HeroSubtext>
                    <ButtonsContainer>
                        <Link to={"/marketplace"} className="right">
                             <HeroButton buttonText="View Products"/>
                        </Link>
                        <Link to={"/signup"} className="left">
                              <HeroButton buttonText="Sign up" primary/>
                        </Link>
                    </ButtonsContainer>
                </HeroTextModal>
            </HeroTextContainer>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    display: block;
    flex-direction: row;
    width: 100%;
    flex: 0 0 50%;
    align-items: center;
    ${breakpoint('md')`
        display: flex;
     `}
`

const HeroVisualContainer = styled.div`
flex: 1;
position: relative;
width: 80%;
height: unset;
${breakpoint('lg')`
        height: calc(${props => props.theme.fullHeight} * .7);
        width: unset;
     `}
`

const HeroVisual = styled.img`
    position: absolute;
    top: 0;
    width: 80%;
    height: unset;
    ${breakpoint('lg')`
        height: calc(${props => props.theme.fullHeight} * .7);
        width: unset;
     `}
`

const HeroTextContainer = styled.div`
    flex: 1;
    z-index: 2;
`

const HeroTextHeader = styled.h1`

`

const HeroTextModal = styled.div`
margin-top: 30px;
background: white;
${props => props.theme.elements.shadow};
width: 100%;
box-sizing: border-box;
border-radius: ${props => props.theme.elements.borderRadius};
padding: 30px;
&.first {
    margin-top: 0px;
}
${breakpoint('lg')`
        width: 70%;
     `}
`

const HeroSubtext = styled.p`
    line-height: 1.5em;
`

const HeroButton = styled(Button)`
    width: unset !important;

`

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`

const HeroSubhead = styled.h2`

`

const Link = styled(NavLink)`
    flex: 1;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    align-items: center;
    &.right {
        margin-right: 10px;
    }
    &.left {
        margin-left: 10px;
    }
`