import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SplashContainer = styled.div`
  background: red;
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Splash() {
  return (
    <SplashContainer className='splash'>
      <h1>Secret Recipes</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/recipes">Recipes</Link>
    </SplashContainer>
  )
}
