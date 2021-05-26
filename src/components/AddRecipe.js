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
        width: 35%;
        margin: auto;
        }
        input, textarea{
        height: 5vh;
        margin: 1% 0;
        text-align: left;
        width: 20em;
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
	const { user_id } = useParams();

	const [recipe, setRecipe] = useState({
		user_id:Date.now(),
		title:"",
		source: "",
		ingredients: [""],
		description: "",
		categories: [""]
	});
	
	useEffect(()=>{
        axiosWithAuth().post(`/auth/recipes/${user_id}`)
            .then(res=>{
                setRecipe(res.data);
            })
            .catch(err=>{
                console.log(err.res);
            })
    }, [user_id]);

	const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
		e.preventDefault();
    	axiosWithAuth().post(`/auth/recipes`, recipe)
      .then(res=>{
       setRecipe(res.data);
       console.log(res.data)
        push(`/recipes`);
      })
      .catch(err=>{
        console.log(err);
      })
	}
	
	const { title, source, ingredients, description, categories } = recipe;

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
						<input value={title} onChange={handleChange} name="title" type="text"/>
					</div>
					<div>
						<label>Source</label>
						<input value={source} onChange={handleChange} name="source" type="text" />
					</div>
					<div>
						<label>Ingredients</label>
						<input value={ingredients} onChange={handleChange} name="ingredients" type="text" />
					</div>
					<div>
						<label>Description</label>
						<textarea value={description} onChange={handleChange} name="description"/>
					</div>		
					<div>
						<label>Categories</label>
						<input value={categories} onChange={handleChange} name="categories" type="text" />
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
