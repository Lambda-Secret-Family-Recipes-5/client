import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SplashContainer = styled.div`
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SplashHeadline = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  font-family: serif;
  @media (max-width: 1200px){
    font-size: 5rem;
  }
  @media (max-width: 800px){
    font-size: 2.5rem;
  }
`;

const SplashLink = styled(Link)`
  width: 15%;
  font-size: 1.6rem;
  padding: 1rem;
  background: white;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin-bottom: 3%;
  box-shadow: 2px 3px 5px #d0d0d0;
  &:hover {
    background: black;
    color: white;
    box-shadow: 0 0 0 white;
    border-radius: 5px;
  }
  @media (max-width: 800px){
    width: 25%;
    font-size: 1.1rem;
  }
`;

export default function Splash() {
  return (
    <SplashContainer className='splash'>
      <SplashHeadline>Secret Recipes</SplashHeadline>
      <SplashLink to="/signup">Sign Up</SplashLink>
      <SplashLink to="/login">Login</SplashLink>
    </SplashContainer>
  );
}
