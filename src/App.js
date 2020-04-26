import React, {useEffect} from 'react';
import { Home, Marketplace, SignUp, LogIn, SignUpOrg, Account } from './pages';
import breakpoint, {map} from 'styled-components-breakpoint';
import { Navbar } from './components/Navbar';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })

  
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveContainer>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/marketplace" render={() => <Marketplace />} />
            <Route path="/signup" render={() => <SignUp />} />
            <Route path="/signuporg" render={() => <SignUpOrg />} />
            <Route path="/account" render={() => <Account />} />
            <Route path="/login" render={() => <LogIn />} />
            <Route exact path="" render={() => <Home />} />
          </Switch>
        </Router>
      </ResponsiveContainer>
    </ThemeProvider>
  );
}

export default App;

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  fullHeight: 'calc(var(--vh, 1vh) * 100)',
  colors: {
    primary: 'black',
    secondary: 'white',
    lightGray: 'rgba(0,0,0,.2)',
    darkGray: 'rgba(0,0,0,.5)',
    linkColor: '#0e27ff',
    palette: {
      first: 'rgb(228, 247, 255)',
      second: 'rgb(236, 255, 217)'
    }
  },
  logoWidth: '123px',
  fonts: {
    primary: 'Roboto'
  },
  fontSizes: {
    large: '30px',
    small: '12px'
  },
  elements: {
    shadow: '-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);',
    innerShadow: '-webkit-box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.15);-moz-box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.07);box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.07);',
    borderRadius: '20px'
  }
}

const ResponsiveContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  ${breakpoint('xs')`
  max-width: 95%;
   `}

   ${breakpoint('s')`
   max-width: 95%;
   `}

  ${breakpoint('md')`
  max-width: 95%;
   `}

   ${breakpoint('lg')`
   max-width: 1100px;
   `}

${breakpoint('xl')`
  max-width: 1400px;
   `}

`
