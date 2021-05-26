import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

import Header from './Header'

const SeeRecipe = () => {
  const [recipe, setRecipe] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${id}`)
      .then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Header />
      
    </div>
  )
}

export default SeeRecipe
