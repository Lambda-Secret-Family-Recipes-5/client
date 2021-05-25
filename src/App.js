import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Splash from './components/Splash'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import AddRecipe from './components/AddRecipe'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/recipes' component={Dashboard} />
        <Route path='/addrecipe' component={AddRecipe} />
      </Switch>
    </div>
  );
}

export default App;
