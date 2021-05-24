import React, { useState } from "react";
import EditRecipe from "./EditRecipe";

export default function Recipe({category, ingredients, instructions, source, title}) {
  const [editing, setEditing] = useState(false);

  const editRecipe = () => {
    setEditing(!editing);
  };

  return (
    editing ?
      <EditRecipe finishEditing={editRecipe} category={category} ingredients={ingredients} instructions={instructions} source={source} title={title} /> :
    (
      <div className="recipe-container">
        <h4>{title}</h4>
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
        <button onClick={editRecipe}>Edit Recipe</button>
      </div>
    )
  );
};
