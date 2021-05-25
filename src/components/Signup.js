import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
    yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then( () => {
        setFormErrors({ ...formErrors, [e.target.name]: '' })
      })
      .catch( err => {
        setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] })
      })
      
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const handleSubmit = e => {
    e.preventDefault()

    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

    axios.post('/auth/register', newUser)
      .then( res => {
        console.log(res)
        props.history.push('/login')
      })
      .catch( err => {
        console.log(err)
      })
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

        {/* <label>Confirm Email:
          <input
            type='email'
            name='confirmEmail'
            onChange={handleChange}
            value={formValues.confirmEmail}
          />
        </label>
        <p className='errors'>{formErrors.confirmEmail}</p> */}

        <label>Enter Password:
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={formValues.password}
          />
        </label>
        <p className='errors'>{formErrors.password}</p>

        {/* <label>Confirm Password:
          <input
            type='password'
            name='confirmPass'
            onChange={handleChange}
            value={formValues.confirmPass}
          />
        </label>
        <p className='errors'>{formErrors.confirmPass}</p> */}

        <button disabled={disabled}>Register!</button>
      </form>
    </div>
  )
}