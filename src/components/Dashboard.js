import React, { useState } from 'react';
import styled from "styled-components";
import Header from './Header';
import Recipe from './Recipe';
import bgImage from "../Assets/ball-park.jpg";

const DashContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-attachment: fixed;
`;

const DashMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 0;
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
    <DashContainer className='dashboard'>
      <Header searchTerm={searchTerm}/>
      <DashMain>
      {
        recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              recipe={recipe}
            />
          );
        })
      }
      </DashMain>
    </DashContainer>
  );
}
