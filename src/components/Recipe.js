import React, { useState } from "react";
import EditRecipe from "./EditRecipe";
import styled from "styled-components";

const RecipeCard = styled.div`
  background: #fdfaf6;
  width: 28%;
  border-radius: 5px;
  padding: 1rem;
  font-family: "Courier";
  margin-bottom: 1rem;
`;

const RecipeTitle = styled.h4`
  margin: 0;
  font-family: serif;
`;

const EditButton = styled.button`
  background: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 3px 2px 5px #5c5b59;
  color: black;
  font-family: courier;
  font-weight: 600;
  padding: 0.5rem;
  cursor: pointer;
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
  margin: 0
`;

const RecipeFieldText = styled.p`
  margin: 0 0 1rem 0.5rem;
`;

export default function Recipe({recipe, changeRecipe}) {
  const [editing, setEditing] = useState(false);

  const editRecipe = () => {
    setEditing(!editing);
  };

  const {title, category, ingredients, instructions, source} = recipe;
  return (
    <RecipeCard>
      {editing ?
       <EditRecipe finishEditing={editRecipe} initrecipe={recipe} update={changeRecipe}/> :
    (
      <div className="recipe-container">
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeList>
          <li className="list-title">Categories:</li>
          {
            category.map(cat => {
              return (
                <li>{cat}</li>
              );
            })
          }
        </RecipeList>
        <RecipeList>
          <li className="list-title">Ingredients:</li>
          {
            ingredients.map(ingredient => {
              return (
                <li>{ingredient}</li>
              );
            })
          }
        </RecipeList>
        <RecipeFieldTitle>Instructions: </RecipeFieldTitle>
        <RecipeFieldText>{instructions}</RecipeFieldText>
        <RecipeFieldTitle>Source: </RecipeFieldTitle>
        <RecipeFieldText>{source}</RecipeFieldText>
        <EditButton onClick={editRecipe}>Edit Recipe</EditButton>
      </div>
    )}
    </RecipeCard>
  );
};
