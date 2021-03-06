import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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

export default function Recipe({recipe, expanded, setEditing}) {
  const [disabled, setDisabled] = useState(false);
  const [confirm, setConfirm] = useState(false)

  const { push } = useHistory()

  const {
    id, title, categories, source, description,
    ingredients, steps, contributor
  } = recipe;

  const navHandler = () => {
    push('/recipes')
  }

  const editHandler = (event) => {
    axiosWithAuth().get(`/recipes/${id}`)
      .then(res => push(`/recipes/${id}`))
      .catch(err => setDisabled(true));
  };

  const confirmHandler = () => {
    setConfirm(!confirm)
  }

  const deleteHandler = () => {
    axiosWithAuth()
      .delete(`/recipes/${id}`)
      .then(res => {
        console.log(res)
        push('/recipes')
      })
      .catch(err => console.log(err))
  }

  return (
    <RecipeCard>
      <div>
        {
          expanded &&
          <button onClick={navHandler}>Back to Recipes</button>
        }
      </div>
      <br />
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

        <RecipeFieldTitle>Description: </RecipeFieldTitle>
        <RecipeFieldText>{description}</RecipeFieldText>

        <RecipeFieldTitle>Source: </RecipeFieldTitle>
        <RecipeFieldText>{source}</RecipeFieldText>

        <RecipeFieldTitle>Contributor: </RecipeFieldTitle>
        <RecipeFieldText>{contributor}</RecipeFieldText>

        {ingredients && (
          <RecipeList>
            <li className="list-title">Ingredients:</li>
            {
              ingredients.map(ingredient => {
                return (
                  <>
                    <li>name: {ingredient.name}</li>
                    <li>quantity: {ingredient.quantity}</li>
                    <li>unit: {ingredient.unit}</li>
                  </>
                );
              })
            }
          </RecipeList>
        )}

        {steps && (
          <RecipeList>
            <li className="list-title">Steps:</li>
            {
              steps.map(step => {
                return (
                  <li>{step.step_number}: {step.instructions}</li>
                );
              })
            }
          </RecipeList>
        )}

        {
          expanded 
          
          ?
          <>
            <button onClick={(e) => setEditing(true)}>Edit Recipe</button>
            <button onClick={confirmHandler} >{confirm? 'Cancel Delete' : 'Delete Recipe'}</button>
            {
              confirm &&
              <>
                <p className='confirmation'>Are you sure? This cannot be undone.</p>
                <button onClick={deleteHandler}>Yes</button>
                <button onClick={confirmHandler}>No</button>
              </>
            }
          </> 
          
          :
          <button disabled={disabled} onClick={editHandler}>See Recipe</button>
        }

        {disabled && <p>You do not have access to this recipe</p>}
        
      </div>
    </RecipeCard>
  );
};
