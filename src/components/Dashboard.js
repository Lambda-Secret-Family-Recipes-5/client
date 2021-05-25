import React, { useState } from 'react';
import styled from "styled-components";
import Header from './Header';
import Recipe from './Recipe';
import styled from "styled-components";
import bgImage from "../Assets/ball-park.jpg";

const DashMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 0;
  background-image: url(${bgImage});
  background-size: cover;
`;

const testingData = [
  {
    key: 0,
    category: ["asdf"],
    ingredients: ["chives"],
    instructions: "asdfjk;asdflk asdfkja asdfjlk",
    source: " adfkjasdlfjk adf jlkasdflasd j",
    title: "A Chicken"
  },
  {
    key: 1,
    category: ["asdf"],
    ingredients: ["chives"],
    instructions: "asdfjk;asdflk asdfkja asdfjlk",
    source: " adfkjasdlfjk adf jlkasdflasd j",
    title: "A Chicken"
  },
  {
    key: 2,
    category: ["asdf"],
    ingredients: ["chives"],
    instructions: "asdfjk;asdflk asdfkja asdfjlk",
    source: " adfkjasdlfjk adf jlkasdflasd j",
    title: "A Chicken"
  },
  {
    key: 3,
    category: ["asdf"],
    ingredients: ["chives"],
    instructions: "asdfjk;asdflk asdfkja asdfjlk",
    source: " adfkjasdlfjk adf jlkasdflasd j",
    title: "A Chicken"
  }
];



export default function Dashboard() {
  const [recipes, setRecipes] = useState(testingData);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='dashboard'>
      <Header searchTerm={searchTerm}/>
      <DashMain>
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
      </DashMain>
    </div>
  );
}
