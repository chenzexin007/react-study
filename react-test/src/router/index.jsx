import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "../pages/Main/Home"
import LiveService from "../pages/Main/LiveService"
import Shop from "../pages/Main/Shop"
import User from "../pages/Main/User"
import City from '../pages/City'
import BottomNav from '../components/BottomNav'
import Layout from '../pages/Main/Layout'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/City" component={City}></Route>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/live" component={LiveService}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
          <BottomNav/>
        </Layout>
      </Switch>
    </Router>
  )
}

export default AppRouter
