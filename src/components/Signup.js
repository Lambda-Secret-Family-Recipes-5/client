import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from '../utils/formSchema'
import styled from 'styled-components'

const StyledSignup = styled.div`

h2 {
  text-align: center;
  font-family: serif;
}

.signup-form {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 69%;
  margin: 0 auto;
}

label {
  font-weight: bold;
  font-size: large;
  text-align: left;
}

input {
  width: 97%;
  height: 30px;
  font-size: large;
  border: 2px solid #981f09;
}

p {
  color: red;
  font-style: italic;
  margin-top: 0%;
  text-align: left;
}

button:disabled {
  height: 30px;
  border: none;
  background-color: #981f09;
  color: white;
  opacity: 50%;
}

button {
  margin-top: 10px;
}

button:enabled {
  height: 30px;
  border: none;
  background-color: #981f09;
  color: white;
  transition: .2s;
}

button:enabled:hover {
  background-color: white;
  color: #981f09;
}
`

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
    formSchema.isValid(formValues).then(valid => {
      const { email, confirmEmail, password, confirmPass } = formValues

      if(email !== confirmEmail && confirmEmail !== '') {
        setFormErrors({
          ...formErrors,
          confirmEmail: 'Emails must match'
        })
      }
      
      if(password !== confirmPass && confirmPass !== '') {
        setFormErrors({
          ...formErrors,
          confirmPass: 'Passwords must match'
        })
      }

      setDisabled(
        !valid ||
        email !== confirmEmail ||
        password !== confirmPass
      )
    })
  })

  const handleSubmit = e => {
    e.preventDefault()

    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

    axios.post('https://tt16-secret-recipes.herokuapp.com/api/auth/register', newUser)
      .then( res => {
        console.log(res)
        props.history.push('/login')
      })
      .catch( err => {
        console.log(err)
      })
  }

  return (
    <StyledSignup>
    <div className='signup'>
      <h2>Sign Up / Register</h2>

      <form className='signup-form' onSubmit={handleSubmit} >
        <label>Username
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={formValues.username}
            placeholder='Enter Username'
          />
        </label>
        <p className='errors'>{formErrors.username}</p>

        <label>Email
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={formValues.email}
            placeholder='Enter Email'
          />
        </label>
        <p className='errors'>{formErrors.email}</p>

        <label>Confirm Email
          <input
            type='email'
            name='confirmEmail'
            onChange={handleChange}
            value={formValues.confirmEmail}
          />
        </label>
        <p className='errors'>{formErrors.confirmEmail}</p>

        <label>Password
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={formValues.password}
            placeholder='Enter Password'
          />
        </label>
        <p className='errors'>{formErrors.password}</p>

        <label>Confirm Password
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
    </StyledSignup>
  )
}