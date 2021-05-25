import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters long'),
})