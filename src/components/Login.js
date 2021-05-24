import axios from "axios";
import React, {useState } from "react";
import { useHistory } from 'react-router-dom';

  const credentials={
    username: "",
    password: ""
  }
const Login = () => {
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
    
      axios.post('', userLogin)
        .then(res=>{
        localStorage.setItem("token", res.data.payload);
          push('/dashboard');
        })
          .catch(err=>{
        console.log(err);
      });
    };


  return (
    <div>
      <h1>Login!</h1>
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
    </div>
  );
};

export default Login;