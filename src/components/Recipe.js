import React, { useState } from "react";
import EditRecipe from "./EditRecipe";
import styled from "styled-components";

const RecipeCard = styled.div`
  background: #fbfaf6;
  width: 30%;
  border-radius: 5px;
  padding: 1rem;
  font-family: "Courier";
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

export default function Recipe({category, ingredients, instructions, source, title}) {
  const [editing, setEditing] = useState(false);

  const editRecipe = () => {
    setEditing(!editing);
  };

  return (
    <RecipeCard>
      {editing ?
      <EditRecipe finishEditing={editRecipe} category={category} ingredients={ingredients} instructions={instructions} source={source} title={title} /> :
    (
      <div className="recipe-container">
        <RecipeTitle>{title}</RecipeTitle>
        <ul>
          {
            category.map(cat => {
              return (
                <li>{cat}</li>
              );
            })
          }
        </ul>
        <ul>
          {
            ingredients.map(ingredient => {
              return (
                <li>{ingredient}</li>
              );
            })
          }
        </ul>
        <p>{instructions}</p>
        <p>{source}</p>
        <EditButton onClick={editRecipe}>Edit Recipe</EditButton>
      </div>
    )}
    </RecipeCard>
  );
};
