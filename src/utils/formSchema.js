import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters long'),

  email: yup.string()
    .required('Email is required')
    .email('Must be a valid email address'),

  confirmEmail: yup.string()
    .required('Email confirmation is required')
    .oneOf([yup.ref('email'), null], 'Emails must match'),
  
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long'),

  confirmPass: yup.string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

export default formSchema