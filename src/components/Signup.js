import React, { useState } from 'react'
import * as yup from 'yup'
import formSchema from '../utils/formSchema'

const initialFormValues = {
  username: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPass: '',
}

const initialFormErrors = {
  username: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPass: '',
}

export default function Signup(props) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    setFormValues({
      ...formValues,
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
            value={formValues.username}
          />
        </label>
        <p className='errors'>{formErrors.username}</p>

        <label>Enter Email:
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={formValues.email}
          />
        </label>
        <p className='errors'>{formErrors.email}</p>

        <label>Confirm Email:
          <input
            type='email'
            name='confirmEmail'
            onChange={handleChange}
            value={formValues.confirmEmail}
          />
        </label>
        <p className='errors'>{formErrors.confirmEmail}</p>

        <label>Enter Password:
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={formValues.password}
          />
        </label>
        <p className='errors'>{formErrors.password}</p>

        <label>Confirm Password:
          <input
            type='password'
            name='confirmPass'
            onChange={handleChange}
            value={formValues.confirmPass}
          />
        </label>
        <p className='errors'>{formErrors.confirmPass}</p>

        <button disabled={disabled}>Register!</button>
      </form>
    </div>
  )
}