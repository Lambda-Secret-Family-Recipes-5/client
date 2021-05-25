import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #fdfaf6;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 2% 0;
`;

const HeaderButtons = styled.div`
  background: green;
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

export default function Header({searchTerm}){
  const signOut = () => {
    
  };

  return (
    <HeaderContainer>
      <Search searchTerm={searchTerm}/>
      <HeaderButtons>
        <Link to="/add-recipe">Add Recipe</Link>
        <button onClick={signOut}>Sign Out</button>
      </HeaderButtons>
    </HeaderContainer>
  );
};
