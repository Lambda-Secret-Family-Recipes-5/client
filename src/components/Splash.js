import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import bgImage from "../Assets/ball-park.jpg";
import logo from "../Assets/Logo.png";

const SplashContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashCard = styled.div`
  background: #eff3f1;
  padding: 0 5%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const SplashHeadline = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  font-family: serif;
  margin: 0 0 2rem 0;
  @media (max-width: 1200px){
    font-size: 5rem;
  }
  @media (max-width: 800px){
    font-size: 2.5rem;
  }
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
  background: #f6fbfb;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin-bottom: 3%;
  box-shadow: 3px 2px 5px #5f6b5e;
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

export default function Splash() {
  return (
    <SplashContainer className='splash' role="img" aria-label="A background image of askew papers by Brandi Redd">
      <SplashCard>
        <SplashLogo src={logo}/>
        <SplashHeadline>Secret Recipes</SplashHeadline>
        <LinkContainer>
          <SplashLink to="/signup">Sign Up</SplashLink>
          <SplashLink to="/login">Login</SplashLink>
        </LinkContainer>
      </SplashCard>
    </SplashContainer>
  );
}
