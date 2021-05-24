import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const AddRecipe = (props) => {
	const { push } = useHistory();
	const { id } = useParams();

	const [recipe, setRecipe] = useState({
		title:"",
		source: "",
		ingredients: "",
		instructions: "",
		category: ""
	});
	
	useEffect(()=>{
        axios.post(`/${id}`)
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
    	axios.post(``, recipe)
      .then(res=>{
       setRecipe(res.data);
       console.log(res.data)
        push(`/recipes`);
      })
      .catch(err=>{
        console.log(err);
      })
	}
	
	const { title, source, ingredients, instructions, category } = recipe;

    return (
	<div>
		<div>
			<form onSubmit={handleSubmit}>
				<div>						
					<h4>Adding New Recipe <strong>{recipe.title}</strong></h4>
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
						<label>Instructions</label>
						<textarea value={instructions} onChange={handleChange} name="instructions"/>
					</div>		
					<div>
						<label>Category</label>
						<input value={category} onChange={handleChange} name="category" type="text" ></input>
					</div>
									
				</div>
				<div>			    
					<input type="submit" value="Save"/>
					<Link to={`/recipes/`}><input type="button"  value="Cancel"/></Link>
				</div>
			</form>
		</div>
	</div>);
}

export default AddRecipe;