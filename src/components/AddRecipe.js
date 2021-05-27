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

const AddRecipe = (props) => {

	const initialRecipeValues ={
	id:"",
	title:"",
	source: "",
	ingredients:[{
				id:Date.now(),
				name:"", 
				quantity:"", 
				unit:""
			}],
	description: "",
	categories: [""],
	steps: [{step_number:"", 
			instructions:""
			}],
		}

   
	const { push } = useHistory();
	const { id } = useParams();

	const [recipe, setRecipe] = useState(initialRecipeValues);
	const [moreIngredients, setMoreIngredients] = useState(false);
	const [moreSteps, setMoreSteps] = useState(false);

	
	useEffect(()=>{
        axiosWithAuth().post(`/recipes/${id}`)
            .then(res=>{
                setRecipe(res.data);
            })
            .catch(err=>{
                console.log(err.res);
            })
    }, [id]);

	const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
		e.preventDefault();

		const newRecipe = {
			title: recipe.title.trim(),
			source: recipe.source.trim(),
			ingredients: recipe.ingredients.trim(),
			description: recipe.description.trim(),
			categories: recipe.categories.trim(),
			steps: recipe.steps.trim(),
		  }
    	axiosWithAuth().post(`/recipes`, newRecipe)
      		.then(res=>{
       			setRecipe(res.data);
       			console.log(res.data)
        	push(`/recipes`);
      	})
      		.catch(err=>{
        		console.log(err);
      })
	}

	const toggleIngredients = e => {
		e.preventDefault();
		setMoreIngredients(!moreIngredients);
	  };
	const toggleSteps = e => {
		e.preventDefault();
		setMoreSteps(!moreSteps);
	  };

    return (
	<StyledAddRecipe>
		<div>
			<form onSubmit={handleSubmit}>
				<div>						
					<h1>Adding {recipe.title} Recipe </h1>
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
						<label>Category</label>
						<input value={recipe.categories} onChange={handleChange} name="categories" type="text" placeholder="Categories" />
					</div>
					<div>
						<label>Description</label>
						<textarea value={recipe.description} onChange={handleChange} name="description" placeholder="Description"/>
					</div>		
					<div>
						<label>Ingredients</label>
						<input value={recipe.ingredients.name} onChange={handleChange} name="name" type="text" placeholder="Ingredient Name" />
						<select value={recipe.ingredients.quantity} name="quantity" onChange={handleChange} >
            				<option value="">-- Quantity --</option>
            				<option value="1">1</option>
            				<option value="2">2</option>
            				<option value="3">3</option>
							<option value="4">4</option>
            				<option value="5">5</option>
            				<option value="6">6</option>
							<option value="7">7</option>
            				<option value="8">8</option>
            				<option value="9">9</option>
          				</select>
						  <select value={recipe.ingredients.unit} name="unit" onChange={handleChange} >
            				<option value="">-- Unit --</option>
            				<option value="cup">Cup</option>
            				<option value="package">Package</option>
							<option value="cube">Cube</option>
							<option value="sachet">Sachet</option>
							<option value="cup">Cup</option>
          				</select>s
						{/* <input value={ingredients} onChange={handleChange} name="quantity" type="text" placeholder="quantity"/>
						<input value={ingredients} onChange={handleChange} name="unit" type="text" placeholder="unit"/>s */}
					</div><br/>
					<div>
					{ moreIngredients && <>
					  <input value={recipe.name} onChange={handleChange} name="name" type="text" placeholder="Ingredient Name" />
					  <select value={recipe.ingredients.quantity} name="quantity" onChange={handleChange}>
            				<option value="">-- Quantity --</option>
            				<option value="1">1</option>
            				<option value="2">2</option>
            				<option value="3">3</option>
							<option value="4">4</option>
            				<option value="5">5</option>
            				<option value="6">6</option>
							<option value="7">7</option>
            				<option value="8">8</option>
            				<option value="9">9</option>
          				</select>
						  <select value={recipe.ingredients.unit} name="unit" onChange={handleChange} >
            				<option value="">-- Unit --</option>
            				<option value="cup">Cup</option>
            				<option value="package">Package</option>
							<option value="cube">Cube</option>
							<option value="sachet">Sachet</option>
							<option value="cup">Cup</option>
          				</select>s
						{/* <input value={ingredients} onChange={handleChange} name="quantity" type="text" placeholder="quantity"/>
						<input value={ingredients} onChange={handleChange} name="unit" type="text" placeholder="unit"/>s */}
						</>
						}</div>
					<div>
					<Link onClick={toggleIngredients}>Add New Ingredients</Link>
					</div>	<br/>
					<div>
						<label>Steps</label>
						<select value={recipe.steps.step_number} name="step_number" onChange={handleChange} >
            				<option value="">-- Steps --</option>
            				<option value="1">1</option>
            				<option value="2">2</option>
            				<option value="3">3</option>
							<option value="4">4</option>
            				<option value="5">5</option>
            				<option value="6">6</option>
							<option value="7">7</option>
            				<option value="8">8</option>
            				<option value="9">9</option>
          				</select><br/>
						{/* <input value={steps} onChange={handleChange} name="step_number" type="text" placeholder="Steps" /><br/> */}
						<textarea value={recipe.steps.instructions} onChange={handleChange} name="instructions" type="text" placeholder="Instructions"/>
					</div>	
					 <div>
						{ moreSteps ? <>
							<select value={recipe.steps.step_number} name="step_number" onChange={handleChange} >
            				<option value="">-- Steps --</option>
            				<option value="1">1</option>
            				<option value="2">2</option>
            				<option value="3">3</option>
							<option value="4">4</option>
            				<option value="5">5</option>
            				<option value="6">6</option>
							<option value="7">7</option>
            				<option value="8">8</option>
            				<option value="9">9</option>
          				</select><br/>
							{/* <input value={steps} onChange={handleChange} name="step_number" type="text" placeholder="Steps" /><br/> */}
							<textarea value={recipe.steps.instructions} onChange={handleChange} name="instructions" type="text" placeholder="Instructions"/>
							</>
							: ""}
						</div>
						<div>
						<Link onClick={toggleSteps}>Add More Steps</Link>
						</div>	
				</div>
                <br/>
				<div>			    
					<button type="submit" value="Save">Submit</button>
					<Link to={`/recipes/`}><button type="button"  value="Cancel"> Cancel </button></Link>
				</div>
			</form>
		</div>
	</StyledAddRecipe>
    );
}

export default AddRecipe;
