import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth} from '../utils/axiosWithAuth'

const StyledAddRecipe = styled.div`

        form {
        border: 1px solid #999;
        padding: 0.25em;
        background-color: #fdfaf6;
        width: 80%;
        /* margin: auto; */
        }
        input{
        height: 5vh;
        margin: 1% 0;
        text-align: left;
        width: 14em;
        }
		textarea{
        height: 5vh;
        margin: 1% 0;
        text-align: left;
        width: 30em;
        }
        label{
        float: left;
	    width: 8em;
	    text-align: left;
        align-items: center;
        padding-top: 4%;
	    padding-right: 0.5em;
        font-size: 1.2rem;
        margin: 0 0%;
        }
        button{
        border: none;
        background-color: black;
        color: white;
        padding: 8px 15px;
        margin: 16px;
}
    `

const EditRecipe = ({initRecipe}) => {

	const { push } = useHistory();
	const { id } = useParams();

	const [recipe, setRecipe] = useState(initRecipe);
	const [currIngredient, setCurrIngredient] = useState({
    id: Date.now(),
    name: "",
    quantity: 0,
    unit: ""
  });
	const [currStep, setCurrStep] = useState({
    step_number: recipe.steps.length,
    instructions: ""
  });
  const [currCategory, setCurrCategory] = useState("");

  const addIngredient = (newIngredient) => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, newIngredient]
    });
  };
  const addStep = (newStep) => {
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, newStep]
    });
  };
  const addCategory = (category) => {
    setRecipe({
      ...recipe,
      categories: [...recipe.categories, category]
    });
  };

	useEffect(()=>{
    axiosWithAuth().get(`/recipes/${id}`)
      .then(res=>{
        setRecipe(res.data);
      })
      .catch(err=>{
        console.log(err);
      });
  }, [id]);

	const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const handleCategory = (e) => {
    setCurrCategory(e.target.value);
  };

  const submitCategory = (e) => {
    e.preventDefault();
    addCategory(currCategory);
  };

  const handleIngredient = (e) => {
    setCurrIngredient({
      ...currIngredient,
      [e.target.name]: e.target.value
    });
  };

  const submitIngredient = (e) => {
    e.preventDefault();
    addIngredient(currIngredient);
  };

  const handleStep = (e) => {
    setCurrStep({
      ...currStep,
      instructions: e.target.value
    });
  };

  const submitStep = (e) => {
    e.preventDefault();
    addStep(currStep);
    setCurrStep({
      step_number: (currStep.step_number + 1),
      instructions: ""
    });
  };

  const handleSubmit = (e) => {
		e.preventDefault();

		const newRecipe = {
			title: recipe.title.trim(),
			source: recipe.source.trim(),
			ingredients: recipe.ingredients,
			description: recipe.description.trim(),
			categories: recipe.categories,
			steps: recipe.steps,
		  }
    	axiosWithAuth().put(`/recipes/${id}`, newRecipe)
      		.then(res=>{
       			setRecipe(res.data);
       			console.log(res.data)
        	push(`/recipes`);
      	})
      		.catch(err=>{
        		console.log(err);
      })
	}

  console.log(recipe);
  return (
	  <StyledAddRecipe>
		  <div>
			  <form onSubmit={handleSubmit}>
				  <div>
					  <h1>Adding Recipe</h1>
				  </div>
				  <div>
					  <div>
						  <label>Title</label>
						  <input value={recipe.title} onChange={handleChange} name="title" type="text" placeholder="Title"/>
					  </div>
					  <div>
						  <label>Source</label>
						  <input value={recipe.source} onChange={handleChange} name="source" type="text" placeholder="Source"/>
					  </div>
					  <div>
              {
                (recipe.categories.length !== 0) &&
                  <>
                  <h4>Current Categories: </h4>
                    <ul>
                      { recipe.categories.map(category => {
                        return (
                          <li>{category}</li>
                        );
                      })}
                    </ul>
                  </>
              }
						  <input value={currCategory} onChange={handleCategory} name="categories" type="text" placeholder="New Category" />
              <button onClick={submitCategory}>Add Category</button>
					  </div>
					  <div>
						  <label>Description</label>
						  <textarea value={recipe.description} onChange={handleChange} name="description" placeholder="Description"/>
					  </div>
					  <div>
              {
                (recipe.ingredients.length !== 0) &&
                  <>
                    <h4>Current Ingredients: </h4>
                    <ul>
                      { recipe.ingredients.map(ingredient => {
                        return (
                          <>
                            <li>Name: {ingredient.name}</li>
                            <li>Quantity: {ingredient.quantity}</li>
                            <li>Unit: {ingredient.unit}</li>
                            <br/>
                          </>
                        );
                      })}
                    </ul>
                  </>
              }
						  <label>Add Ingredient</label>
						  <input
                value={currIngredient.name}
                onChange={handleIngredient}
                name="name"
                type="text"
                placeholder="Ingredient Name" />
              <input
                value={currIngredient.quantity}
                onChange={handleIngredient}
                type="number"
                name="quantity"/>
						  <select value={currIngredient.unit} name="unit" onChange={handleIngredient} >
            		<option value="">-- Unit --</option>
            		<option value="cup">Cup</option>
            		<option value="package">Package</option>
							  <option value="cube">Cube</option>
							  <option value="sachet">Sachet</option>
							  <option value="cup">Cup</option>
          		</select>s
              <button onClick={submitIngredient}>Add Ingredient</button>
					  </div><br/>
					  <div>
              {
                (recipe.steps.length !== 0) &&
                  <>
                    <h4>Current Steps: </h4>
                    <ul>
                      { recipe.steps.map(step => {
                        return (
                          <>
                            <li>{`${step.step_number}: ${step.instructions}`}</li>
                          </>
                        );})
                      }
                    </ul>
                  </>
              }
						  <label>Add Step</label>
						  <textarea value={currStep.instructions} onChange={handleStep} name="instructions" type="text" placeholder="Instructions"/>
              <button onClick={submitStep}>Add Step</button>
					  </div>	
				  </div>
          <br/>
				  <div>			    
					  <button type="submit" value="Save">Submit</button>
					  <Link to={`/recipes/${recipe.id}`}><button type="button"  value="Cancel"> Cancel </button></Link>
				  </div>
			  </form>
		  </div>
	  </StyledAddRecipe>
  );
}

export default EditRecipe;
