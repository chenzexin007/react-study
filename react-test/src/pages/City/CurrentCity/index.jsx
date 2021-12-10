import React from "react"
import "./style.scss"

const CurrentCity = (props) => {
  console.log(props)
  return (
    <div className="CurrentCity">
      <h2>当前城市：{ props.city.title }</h2>
    </div>
  )
}

export default CurrentCity;