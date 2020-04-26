import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { Button } from './Button';
import { IoIosMenu, IoIosPerson } from "react-icons/io";
import { gsap } from 'gsap';

export const Navbar = () => {

    let slideOutRef = useRef(null);


    const animateMenu = () => {
        gsap.to(slideOutRef, .4, {xPercent: 100})
    }

    return(
        <NavWrapper>
            <NavSection>
                <NavLinkContainter>
                    <Link to={"/marketplace"}>
                        Marketplace
                    </Link>
                    <Link to={"/"}>
                        About
                    </Link>
                    <Link to={"/"}>
                        Contact
                    </Link>
                </NavLinkContainter>
                <MobileMenu>
                    <SlideOut ref={el => {slideOutRef = el}} >
                        <MobileLink to={"/marketplace"}>
                            Marketplace
                        </MobileLink>
                        <MobileLink to={"/"}>
                            About
                        </MobileLink>
                        <MobileLink to={"/"}>
                            Contact
                        </MobileLink>
                    </SlideOut>
                    <Hamburger onClick={animateMenu}>
                        <IoIosMenu />
                    </Hamburger>
                </MobileMenu>
            </NavSection>
            <NavSection>
            <LogoLink to={"/"}>
                <Logo>
                Wishlist
                </Logo>
            </LogoLink>
            </NavSection>
            <NavSection>
                <LogInContainer>
                    <LogInLink to={"/login"}>
                        <Button buttonText="Log In" primary={true}/>
                    </LogInLink>
                    <MobileLogInLink to={"/login"}>
                        <Button primary={true} login/>
                    </MobileLogInLink>
                </LogInContainer>
            </NavSection>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(${props => props.theme.fullHeight} * .1);
    width: 100%;
    margin-bottom: calc(${props => props.theme.fullHeight} * .075)
`

const NavSection = styled.div`
    height: calc(${props => props.theme.fullHeight} * .1);
    flex: 1 1 33.3%;
    font-family: ${props => props.theme.fonts.primary};
    display: flex;
    align-items: center;
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: bold;

    ${breakpoint('xs')`
    font-size: 24px;
     `}

     ${breakpoint('s')`
    font-size: 26px;
     `}

    ${breakpoint('md')`
    font-size: 28px;
     `}

     ${breakpoint('lg')`
    font-size: 30px;
     `}
 
  ${breakpoint('xl')`
    font-size: 32px;
     `}
`

const NavLinkContainter = styled.div`
    flex-direction: row;
    flex: 1;
    display: none;
    ${breakpoint('lg')`
        display: flex;
    `}
`

const MobileMenu = styled.div`
    display: block;
    ${breakpoint('lg')`
        display: none;
    `}
`

const Hamburger = styled.div`
    width: 40px;
    height: 40px;
    ${props => props.theme.elements.shadow};
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    line-height: 40px;
    justify-content: center;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-right: 30px;
`

const MobileLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-right: 30px;
    color: white;
    opacity: 0;
`

const LogoLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    width: 100%;
`

const LogInContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    flex-direction: row;
    flex: 1;
`

const SlideOut = styled.div`
    height: ${props => props.theme.fullHeight};
    background: black;
    color: white;
    width: 100%;
    position: absolute;
    left: -100%;
    top: 0;
    `

const MobileLogInLink = styled(NavLink)`
    display: flex;
    ${breakpoint('lg')`
        display: none;
    `}
`

const LogInLink = styled(NavLink)`
    display: none;
    text-decoration: none;
    ${breakpoint('lg')`
    display: flex;
    `}
`