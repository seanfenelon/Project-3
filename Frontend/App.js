import React, { useEffect } from 'react'
import { BroweserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import 'bulma' 
import './styles/Style.scss'

//compoments
import Favourites from './Components/Favourites'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Resorts from './Components/Resorts'
import SingleResort from './Components/SingleResort'

const App = () => (
  <BroweserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/joinus" componet={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/resorts" component={Resorts} />
      <Route exact path="/resorts/:name" component={SingleResort} />
      <Route exact path="/favourites" component={Favourites} />
    </Switch> 
  </BroweserRouter>
)

export default App
