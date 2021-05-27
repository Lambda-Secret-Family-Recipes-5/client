import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditRecipe from "./EditRecipe";
import styled from "styled-components";

const RecipeCard = styled.div`
  background: #fdfaf6;
  width: 28%;
  border-radius: 5px;
  padding: 1rem 1rem 1.5rem;
  font-family: "Courier";
  margin-bottom: 1rem;
`;

const RecipeTitle = styled.h4`
  margin: 0;
  font-family: serif;
`;

const EditLink = styled(Link)`
  background: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 3px 2px 4px #5c5b59;
  color: black;
  font-family: courier;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem;
  text-decoration: none;
  &:hover {
    background: black;
    box-shadow: 0 0 0 white;
    color: #fdfaf6;
  }
`;

const RecipeList = styled.ul`
  padding: 0;
  &>li {
    list-style-type: none;
    margin-left: 0.5rem;
  }
  &>li.list-title {
    margin-left: 0;
    font-weight: 600;
  }
`;

const RecipeFieldTitle = styled.p`
  font-weight: 600;
  margin: 0;
`;

const RecipeFieldText = styled.p`
  margin: 0 0 1rem 0.5rem;
`;

export default function Recipe({recipe}) {

  const {
    id, title, categories, source, description,
    ingredients, steps, image_url, contributor
  } = recipe;

  return (
    <RecipeCard>
      <div className="recipe-container">
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeList>
          <li className="list-title">Categories:</li>
          {
            categories.map(cat => {
              return (
                <li>{cat}</li>
              );
            })
          }
        </RecipeList>
        <RecipeFieldTitle>Source: </RecipeFieldTitle>
        <RecipeFieldText>{source}</RecipeFieldText>
        <RecipeFieldTitle>Description: </RecipeFieldTitle>
        <RecipeFieldText>{description}</RecipeFieldText>
        <EditLink to={`/recipes/${id}`}>See Recipe</EditLink>
      </div>
    </RecipeCard>
  );
};
