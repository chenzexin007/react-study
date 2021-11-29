import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
export default class Nav extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <ul>
          <li><NavLink activeClassName="activeSelect" activeStyle={{ color: 'green' }} exact to="/">Home</NavLink></li>
          {/* params参数的传递方式 */}
          {/* <li><NavLink activeClassName="activeSelect" to="/About/111/lilei">About</NavLink></li> */}
          <li><NavLink activeClassName="activeSelect"
            to={{
              pathname: "/About",
              search: "?sort=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            }}          
          >About</NavLink></li>
          {/* query参数的传递 */}
          <li><NavLink activeClassName="activeSelect" to="/PropPage?id=1222">PropPage</NavLink></li>
          <li><NavLink activeClassName="activeSelect" to="/Shop?isLogin=true">Shop页面</NavLink></li>
        </ul>
      </div>
    )
  }
}