import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import Header from './Header';
import Recipe from './Recipe';
import bgImage from "../Assets/ball-park.jpg";

const DashContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  overflow: auto;
`;

const DashMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

export default function Dashboard() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://tt16-secret-recipes.herokuapp.com/api/recipes")
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  }, []);

  const changeRecipe = (newRecipe) => {
    setRecipes(recipes.map((recipe) => {
      return recipe.id === newRecipe.id ? newRecipe : recipe;
    }));
  };

  console.log(recipes)

  return (
    <DashContainer className='dashboard'>
      <Header searchTerm={searchTerm}/>
      <DashMain>
      {
        recipes.map(recipe => {
          console.log(recipe.id);
          return (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              changeRecipe={changeRecipe}
            />
          );
        })
      }
      </DashMain>
    </DashContainer>
  );
}
