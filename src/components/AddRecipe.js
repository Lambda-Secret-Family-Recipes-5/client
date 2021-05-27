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

   
	const { push } = useHistory();
	const { id } = useParams();

	const [recipe, setRecipe] = useState({
		id:Date.now(),
		title:"",
		source: "",
		ingredients:"",
		description: "",
		categories: [""],
		steps: ({step_number:"", 
				instructions:""
				}),
	});
	const [moreIngredients, setMoreIngredients] = useState(false);
	const [moresteps, setMoreSteps] = useState(false);

	
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
    	axiosWithAuth().post(`/recipes`, recipe)
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
		setMoreSteps(!moresteps);
	  };
	
	const { title, source, ingredients, description, steps, categories } = recipe;

    return (
	<StyledAddRecipe>
		<div>
			<form onSubmit={handleSubmit}>
				<div>						
					<h1>Adding {title} Recipe </h1>
				</div>
				<div>					
					<div>
						<label>Title</label>
						<input value={title} onChange={handleChange} name="title" type="text" placeholder="Title"/>
					</div>
					<div>
						<label>Source</label>
						<input value={source} onChange={handleChange} name="source" type="text" placeholder="Source"/>
					</div>
					<div>
						<label>Category</label>
						<input value={categories} onChange={handleChange} name="categories" type="text" placeholder="Categories" />
					</div>
					<div>
						<label>Description</label>
						<textarea value={description} onChange={handleChange} name="description" placeholder="Description"/>
					</div>		
					<div>
						<label>Ingredients</label>
						<input value={ingredients} onChange={handleChange} name="name" type="text" placeholder="Name" />
						<select value={ingredients} name="quantity" onChange={handleChange} id="size-dropdown">
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
						  <select value={ingredients} name="unit" onChange={handleChange} id="size-dropdown">
            				<option value="">-- Unit --</option>
            				<option value="cup">Cup</option>
            				<option value="package">Package</option>
          				</select>
						{/* <input value={ingredients} onChange={handleChange} name="quantity" type="text" placeholder="quantity"/>
						<input value={ingredients} onChange={handleChange} name="unit" type="text" placeholder="unit"/>s */}
					</div><br/>
					<div>
					{ moreIngredients && <>
					  <input value={ingredients} onChange={handleChange} name="name" type="text" placeholder="name" />
					  <select value={ingredients} name="quantity" onChange={handleChange} id="size-dropdown">
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
						  <select value={ingredients} name="unit" onChange={handleChange} id="size-dropdown">
            				<option value="">-- Unit --</option>
            				<option value="cup">Cup</option>
            				<option value="package">Package</option>
          				</select>
						{/* <input value={ingredients} onChange={handleChange} name="quantity" type="text" placeholder="quantity"/>
						<input value={ingredients} onChange={handleChange} name="unit" type="text" placeholder="unit"/>s */}
						</>
						}</div>
					<div>
					<Link onClick={toggleIngredients}>Add New Ingredients</Link>
					</div>	<br/>
					<div>
						<label>Steps</label>
						<select value={steps} name="step_number" onChange={handleChange} id="size-dropdown">
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
						<textarea value={steps} onChange={handleChange} name="instructions" type="text" placeholder="Instructions"/>
					</div>	
					 <div>
						{ moresteps ? <>
							<select value={steps} name="step_number" onChange={handleChange} id="size-dropdown">
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
							<textarea value={steps} onChange={handleChange} name="instructions" type="text" placeholder="Instructions"/>
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
