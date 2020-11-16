import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import 'bulma' 
import './styles/Style.scss'

//compoments
import Favourites from './components/Favourites'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import JoinUs from './components/JoinUs'
import Resorts from './components/Resorts'
import SingleResort from './components/SingleResort'
import MyAccount from './components/MyAccount'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/joinus" component={JoinUs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/resorts" component={Resorts} />
      <Route exact path="/resorts/:name" component={SingleResort} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/myaccount" component={MyAccount} />

    </Switch> 
  </BrowserRouter>
)

export default App
