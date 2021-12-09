import React from 'react'
import { NavLink } from "react-router-dom"
import "./index.scss"

function BottomNav() {
  const bottomNav = [
    { title: '首页', path: '/', icon: "shouye" },
    { title: '生活服务', path: '/live', icon: "shenghuo" },
    { title: '商城', path: '/shop', icon: "gouwu" },
    { title: '我的', path: '/user', icon: "yonghu-yuan" },
  ]
  return (
    <div className="nav-footer">
      { bottomNav.map((item,index) => {
        return ( 
          <NavLink key={index} exact to={item.path}>
            <div className={["iconfont", "icon-"+item.icon].join(' ')}></div>
            {item.title}
          </NavLink>
        )
      }) }
    </div>
  )
}

export default BottomNav;
