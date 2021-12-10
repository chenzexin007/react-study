import React from "react"
import "./style.scss"

const ChoiceCity = (props) => {
  console.log(props)

  function clickCityHandle(city){
    props.changeCity(city)
  }

  return (
    <div className="ChoiceCity">
      {
        props.cityArr.map((item,index) => {
          return (
            <div className="city-item" onClick={() => clickCityHandle(item)} key={index}>{ item.title }</div>
          )
        })
      }
    </div>
  )
}

export default ChoiceCity