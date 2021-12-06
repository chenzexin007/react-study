import React from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from '../views/login/Login'
import NewSanBox from '../views/newSanBox/NewSanBox'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/" component={NewSanBox}/> */}
        <Route path="/login" component={Login}/> 
        <Route path="/" render={ () =>  localStorage.getItem("token") ? <NewSanBox/> : <Redirect to="/login"/>  }/> 
      </Switch>
    </HashRouter>
  )
}
