import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Splash from './components/Splash'
import Dashboard from './components/Dashboard'
import AddRecipe from './components/AddRecipe'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/addrecipe' component={AddRecipe} />
        <Route path='/recipes' component={Dashboard} />
        <Route path='/' component={Splash} />
      </Switch>
    </div>
  );
}

export default App;
