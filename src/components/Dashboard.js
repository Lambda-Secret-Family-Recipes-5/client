import React, { useState } from 'react';
import styled from "styled-components";
import Header from './Header';
import Recipe from './Recipe';



export default function Dashboard() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='dashboard'>
      <Header searchTerm={searchTerm}/>
      {
        recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              category={recipe.category}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              source={recipe.source}
              title={recipe.title}/>
          );
        })
      }
    </div>
  )
}
