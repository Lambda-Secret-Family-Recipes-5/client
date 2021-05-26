import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const HeaderContainer = styled.header`
  background: #fdfaf6;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 1% 0;
`;

const HeaderButtons = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  font-family: "Courier";
  font-size: 1rem;
  font-weight: 600;
  padding: 0.7rem;
  background: white;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin-bottom: 3%;
  box-shadow: 3px 2px 5px #5c5b59;
  &:hover {
    background: black;
    color: #fdfaf6;
    box-shadow: 0 0 0 white;
    border-radius: 5px;
  }
  @media (max-width: 800px){
    width: 25%;
    font-size: 1.1rem;
  }
`;

const HeaderButton = styled.button`
  font-family: "Courier";
  font-size: 1rem;
  font-weight: 600;
  padding: 0.7rem;
  background: white;
  text-align: center;
  text-decoration: none;
  border: 0;
  border-radius: 3px;
  color: black;
  margin-bottom: 3%;
  box-shadow: 3px 2px 5px #5c5b59;
  cursor: pointer;
  &:hover {
    background: black;
    color: #fdfaf6;
    box-shadow: 0 0 0 white;
    border-radius: 5px;
  }
  @media (max-width: 800px){
    width: 25%;
    font-size: 1.1rem;
  }
`;

export default function Header({searchTerm}){
  const signOut = () => {
    axiosWithAuth().post('/logout')
    .then(res=> {
      localStorage.removeItem("token");
      window.location.href = "/login";
    })
    .catch(err=> {
      console.log(err);
    })
  };

  return (
    <HeaderContainer>
      <Search searchTerm={searchTerm}/>
      <HeaderButtons>
        <HeaderLink to="/addrecipe">Add Recipe</HeaderLink>
        <HeaderButton onClick={signOut}>Sign Out</HeaderButton>
      </HeaderButtons>

    </HeaderContainer>
  );
};
