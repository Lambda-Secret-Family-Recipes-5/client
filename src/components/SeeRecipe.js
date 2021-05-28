import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom'

import Recipe from "./Recipe";
import EditRecipe from "./EditRecipe";


const SeeRecipe = () => {
  const [recipe, setRecipe] = useState(null)
  const [editing, setEditing] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    axiosWithAuth()
      .get(`recipes/${id}`)
      .then( res => {
        setRecipe(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  })

  return (
    <>
      {editing ?
       <EditRecipe setEditing={setEditing} initRecipe={recipe}/> :
       <>
         { recipe && <Recipe recipe={recipe} expanded={true} setEditing={setEditing}/>}
       </>
      }
    </>
  )
}
export default SeeRecipe


