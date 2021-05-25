import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth} from '../utils/axiosWithAuth';

const EditRecipe = ({finishEditing, initrecipe}) => {

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
    `;
	const { push } = useHistory();
	const { id } = useParams();

	const [recipe, setRecipe] = useState(initrecipe);

	useEffect(()=>{
        axiosWithAuth().get(`recipes/${id}`)
            .then(res=>{
                setRecipe(res.data);
            })
            .catch(err=>{
                console.log(err.res);
            });
    }, [id]);

	const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
  };

    const handleSubmit = (e) => {
		e.preventDefault();
    	axiosWithAuth().put(`/recipes/${id}`, recipe)
      .then(res=>{
        setRecipe(res.data);
        console.log(res.data);
        push(`/recipes`);
      })
      .catch(err=>{
        console.log(err);
      });
	  };

	const { title, source, ingredients, instructions, category } = recipe;

    return (
			<form onSubmit={handleSubmit}>
				<div>
					<h4>Edit Recipe</h4>
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
						<input value={category} onChange={handleChange} name="category" type="text" />
					</div>
				</div>
                <br/>
				<div>
					<button type="submit" value="Save">Submit</button>
        <button onClick={finishEditing}>Cancel</button>
				</div>
			</form>
    );
};

export default EditRecipe;
