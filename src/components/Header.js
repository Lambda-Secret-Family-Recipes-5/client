import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";

const HeaderContainer = styled.div`
height: 10vh;
background: #eff3f1;
display: flex;
justify-content: space-between;
padding: 0.7rem;
box-sizing: border-box;
`;

const ButtonCluster = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
`;


export default function Header({searchTerm}){
  const signOut = () => {
    
  };

  return (
    <HeaderContainer>
      <Search searchTerm={searchTerm}/>
      <ButtonCluster>
        <Link to="/add-recipe">Add Recipe</Link>
        <button onClick={signOut}>Sign Out</button>
      </ButtonCluster>
    </HeaderContainer>
  );
};
