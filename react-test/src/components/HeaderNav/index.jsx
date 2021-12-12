import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"
import "./style.scss"
import { useSelector } from "react-redux"

const HeaderNav = () => {
  const city = useSelector(state => state.city)
  return (
    <div id="home-header">
      <div className="home-header-left">
        <Link to="/City">
          <span>{city.title}</span>
          <i className="iconfont icon-yonghu-yuan"></i>
        </Link>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
        <i className="iconfont icon-yonghu-yuan"></i>
        {/* <input type="text" /> */}
        <SearchInput/>
        </div>
      </div>
      <div className="home-header-right">
      <i className="iconfont icon-yonghu-yuan"></i> 
      </div>
    </div>
  )
}

export default HeaderNav;