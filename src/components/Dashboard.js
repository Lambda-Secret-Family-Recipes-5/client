import React, { useState } from 'react'
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
              category={recipe.category}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              source={recipe.source}
              title={recipe.title}/>
          ).filter(recipe => {
            return recipe.title.contains(searchTerm);
          });
        })
      }
    </div>
  )
}
