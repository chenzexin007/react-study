import React from "react"
import "./style.scss"

const HeaderNav = () => {
  return (
    <div id="home-header">
      <div className="home-header-left">
        <span>北京</span>
        <i className="iconfont icon-yonghu-yuan"></i>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
        <i className="iconfont icon-yonghu-yuan"></i>
        <input type="text" />
        </div>
      </div>
      <div className="home-header-right">
      <i className="iconfont icon-yonghu-yuan"></i> 
      </div>
    </div>
  )
}

export default HeaderNav;