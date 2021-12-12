import React from "react"
import { withRouter } from "react-router-dom"
import SearchInput from "../../../components/SearchInput"
import "./style.scss"

const SearchHeader = (props) => {

  function goBackPath(){
    props.history.go(-1)
  }

  return (
    <div id="home-header">
      <div className="home-header-left" onClick={goBackPath}>
        {/* <i className="iconfont icon-yonghu-yuan"></i> */}
        return
      </div>
      <div className="home-header-middle">
        <div className="search-container">
        <i className="iconfont icon-yonghu-yuan"></i>
        <SearchInput/>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SearchHeader);