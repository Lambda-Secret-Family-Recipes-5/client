import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import styled from "styled-components";
import bgImage from "../Assets/ball-park.jpg";
import logo from "../Assets/Logo.png";
import title from '../Assets/Title.png'

import Login from "./Login";
import Signup from "./Signup";

const SplashContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SplashCard = styled.div`
  background: #fdfaf6;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 2rem;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const SplashLink = styled(Link)`
  font-family: "Courier";
  width: 20%;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem;
  background: white;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin-top: 2%;
  margin-bottom: 3%;
  box-shadow: 3px 2px 5px #5c5b59;
  &:hover {
    background: black;
    color: #f6fbfb;
    box-shadow: 0 0 0 white;
    border-radius: 5px;
  }
  @media (max-width: 800px){
    width: 25%;
    font-size: 1.1rem;
  }
`;

const SplashLogo = styled.img`
  width: 10%;
`;

const SplashTitle = styled.img`
  width: 60%;
  margin: 20px auto;
`

const SplashMain = () => {
  return (
    <LinkContainer>
      <SplashLink to="/signup">Sign Up</SplashLink>
      <SplashLink to="/login">Login</SplashLink>
    </LinkContainer>
  );
};

export default function Splash() {
  return (
    <SplashContainer className='splash' role="img" aria-label="A background of hot dogs">
      <SplashCard>
        <SplashLogo src={logo}/>
        <SplashTitle src={title}/>
          <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={SplashMain}/>
          </Switch>
      </SplashCard>
    </SplashContainer>
  );
}
