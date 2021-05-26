import axios from "axios";
import React, {useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {

  const StyledLogin = styled.div`
  form {
  border: 1px solid #999;
  padding: 0.25em;
  background-color: #fdfaf6;
  width: 32%;
  margin: auto;
  }
  input{
  height: 5vh;
  margin: 1% 0;
  text-align: left;
  width: 20em;
  }
  label{
  float: left;
	width: 8em;
	text-align: left;
  align-items: center;
  padding-top: 4%;
	padding-right: 0.5em;
  font-size: 1.2rem;
  margin: 0 0%;
  }
  button{
  border: none;
  background-color: black;
  color: white;
  padding: 8px 15px;
  margin-top: 16px;
}
`
const credentials={
    username: "seyeoni",
    password: "password"
  }

  const { push } = useHistory();

  const [userLogin, setUserLogin] = useState(credentials)

  const handleChange = e => {
    setUserLogin({
      userLogin: {
        ...userLogin,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
      axios.post('https://tt16-secret-recipes.herokuapp.com/api/auth/login', userLogin)
        .then(res=>{
        localStorage.setItem("token", res.data.payload);
          push('/recipes');
        })
          .catch(err=>{
        console.log(err);
      });
    };


  return (
    <StyledLogin>
      <div data-testid="loginForm" className="login">
        <h2>Login</h2>

        <form onSubmit={login}>
          <label>Username:  </label>
          <input
            type="text"
            name="username"
            data-testid="username"
            value={userLogin.username}
            onChange={handleChange}
          />
         
          <label>Password: </label>
          <input
            type="password"
            name="password"
            data-testid="password"
            value={userLogin.password}
            onChange={handleChange}
          />
          
          <button>Login</button>
        </form>

      </div>
    </StyledLogin>
  );
};

export default Login;