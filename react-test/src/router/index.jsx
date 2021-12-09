import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "../pages/Home"
import LiveService from "../pages/LiveService"
import Shop from "../pages/Shop"
import User from "../pages/User"

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/shop" component={Shop}></Route>
      <Route path="/live" component={LiveService}></Route>
      <Route path="/user" component={User}></Route>
    </Router>
  )
}

export default AppRouter
