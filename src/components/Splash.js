import React from 'react'
import { Link } from 'react-router-dom';

export default function Splash() {
  return (
    <div className='splash'>
      <h1>Secret Recipes</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/recipes">Recipes</Link>
    </div>
  )
}
