import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

import Recipe from "./Recipe";


const SeeRecipe = (props) => {
  const [recipe, setRecipe] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${id}`)
      .then( res => {
        setRecipe(res.data);
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

  return (
    <>
    { recipe && <Recipe recipe={recipe}/>}
    </>
  )
}

export default SeeRecipe
