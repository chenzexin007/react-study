import React from "react";
import { withRouter } from "react-router-dom"
import "./style.scss"

const PubHeader = (props) => {

  const goBackPage = () => {
    props.history.go(-1)
  }

  return (
    <div className="PubHeader">
      { props.title }
      <span className="return" onClick={goBackPage}>return</span>
    </div>
  )
}

export default withRouter(PubHeader);