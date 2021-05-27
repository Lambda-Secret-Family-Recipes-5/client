import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Header from './Header';
import Recipe from './Recipe';
import SeeRecipe from "./SeeRecipe";
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
      .then(res => {
        setRecipes(res.data)
      })
      .catch(err => console.log(err));
    
    axiosWithAuth()
      .get('/users')
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }, []);

  return (
    <DashContainer className='dashboard'>
      <Header search={setSearchTerm}/>
      <DashMain>
        <Switch>
          <Route exact path="/recipes">
            {
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    expanded={false}
                  />
                );
              })
            }
          </Route>
          <Route path="/recipes/:id">
            <SeeRecipe/>
          </Route>
        </Switch>
      </DashMain>
    </DashContainer>
  );
}
