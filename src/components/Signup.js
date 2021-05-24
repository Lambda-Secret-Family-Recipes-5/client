import React, { useState } from 'react'

const initialState = {
  username: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPass: '',
}

export default function Signup(props) {
  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log('submitted')
    props.history.push('/recipes')
  }

  return (
    <div className='signup'>
      <h2>Sign Up... It's easy!</h2>
      <form onSubmit={handleSubmit} >
        <label>Enter Username:
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={state.username}
          />
        </label>

        <label>Enter Email:
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={state.email}
          />
        </label>

        <label>Confirm Email:
          <input
            type='email'
            name='confirmEmail'
            onChange={handleChange}
            value={state.confirmEmail}
          />
        </label>

        <label>Enter Password:
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={state.password}
          />
        </label>

        <label>Confirm Password:
          <input
            type='password'
            name='confirmPass'
            onChange={handleChange}
            value={state.confirmPass}
          />
        </label>
        <button>Register!</button>
      </form>
    </div>
  )
}