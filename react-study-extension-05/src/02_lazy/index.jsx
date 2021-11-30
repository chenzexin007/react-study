import React, { Component, lazy, Suspense } from 'react'
import {Routes,  Route, Link } from "react-router-dom"

const Home = lazy(() =>  import("./Home"))
const About = lazy(() => import("./About"))
export default class LazyRoute extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home页</Link>
        <Link to="/about">About页</Link>

        <hr />

        路由显示：
        <Suspense fallback={<h1>loading.....</h1>}>
          <Routes>          
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Suspense>
      </div>
    )
  }
}
