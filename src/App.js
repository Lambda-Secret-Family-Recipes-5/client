import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Splash from './components/Splash'
import Dashboard from './components/Dashboard'
import AddRecipe from './components/AddRecipe'
import EditRecipe from './components/EditRecipe'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/editrecipe/:key'>
          <EditRecipe/>
        </Route>
        <Route path='/addrecipe' component={AddRecipe} />
        <Route path='/recipes' component={Dashboard} />
        <Route path='/' component={Splash} />
      </Switch>
    </div>
  );
}

export default App;
