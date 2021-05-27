import React, { useState } from 'react'
import styled from 'styled-components'

import Recipe from "./Recipe";


const SeeRecipe = (props) => {
  const [recipe, setRecipe] = useState(null)

  return (
    <>
    { recipe && <Recipe recipe={recipe}/>}
    </>
  )
}

export default SeeRecipe


