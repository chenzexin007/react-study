import React, { useState, useEffect } from "react"
import CitySelect from 'react-city-select';
import api from "../../../api";

const CityLists = (props) => {

  const [cityData, setcityData] = useState({ 
    "A": [{
      "id": "152900",
      "name": "阿拉善盟"
    },
    {
      "id": "210300",
      "name": "鞍山"
    }
  ]
   })

  useEffect(() => {
    api.getCityLists().then(res => {
      console.log(res)
      if(res.status === 200){
        setcityData(res.data.result.citylist)
      }
    })
  }, [])

  function handleSelectCity(city){
    console.log(city)
    let obj = {
      id: city.id,
      title: city.name
    }
    props.changeCity(obj)
  }

  return (
    <CitySelect
      // 传入数据
      data={cityData}
      // 传入回调
      onSelectItem={handleSelectCity}>
    </CitySelect>
  )
}

export default CityLists