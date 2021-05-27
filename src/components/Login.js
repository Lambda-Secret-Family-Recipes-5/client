import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogin = styled.div`

.login {
width: 100%;
}
h2 {
  text-align: center;
  font-family: serif;
  margin: 0 0 1rem;
}

form {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 0 auto 1rem;
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

/* button:disabled {
   height: 30px;
   border: none;
   background-color: #981f09;
   color: white;
   opacity: 50%;
}  */

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
`;

const credentials={
    username: "",
    password: ""
  }


const Login = () => {
  const { push } = useHistory();

  const [userLogin, setUserLogin] = useState(credentials)

  const handleChange = e => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  };

  const login = e => {
    e.preventDefault();
      axios.post('https://tt16-secret-recipes.herokuapp.com/api/auth/login', userLogin)
  
        .then(res=>{
        localStorage.setItem("token", res.data.token);
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
          <label>Username
            <input
              type="text"
              name="username"
              data-testid="username"
              value={userLogin.username}
              onChange={handleChange}
            />
          </label>
          <label>Password</label>
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
