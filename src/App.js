import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Splash from './components/Splash'
import Dashboard from './components/Dashboard'
import AddRecipe from './components/AddRecipe'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/addrecipe' component={AddRecipe} />
        <PrivateRoute path='/recipes' component={Dashboard} />
        <Route path='/' component={Splash} />
      </Switch>
    </div>
  );
}

export default App;
