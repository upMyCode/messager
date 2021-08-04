import React from "react"
import { Auth, Home } from "./pages"
import { Route } from 'react-router-dom' 
import "./App.css"

const App = () => {
  return (
    <div className="wrapper">
      <Route exact path={['/', '/login']} component={Auth} />
      <Route exact path='/im' component={Home} />
    </div>
  )
}

export default App
