import React from "react";
import styled from 'styled-components'

const StyledSearch = styled.div`
  input {
    height: 30px;
    font-size: large;
    border: 2px solid #981f09;
  }
`

export default function Search(props) {
  const { setSearch } = props
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <StyledSearch>
      <input type="text" placeholder='Search Recipes by Title' onChange={handleChange} />
    </StyledSearch>
  );
}
