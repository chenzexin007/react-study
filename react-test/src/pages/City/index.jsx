import React from "react"
import PubHeader from "../../components/PubHeader"
import CurrentCity from "./CurrentCity"
import ChoiceCity from "./ChoiceCity"
import CityLists from "./CityLists"
import { useSelector, useDispatch } from "react-redux"
import { changeCity } from "../../redux/actions/city"

const City = (props) => {
  const cityArr = [
    { id:'111', title: '北京' },
    { id:'111', title: '上海' },
    { id:'111', title: '广州' },
    { id:'111', title: '深圳' },
    { id:'111', title: '成都' },
    { id:'111', title: '杭州' },
    { id:'111', title: '佛山' },
    { id:'111', title: '苏州' }
  ]

  // const [city, setcity] = useState('北京')
  const city = useSelector( state => state.city )
  const dispatch = useDispatch()

  function toChangeCity(city){
    // setcity(city.title)
    dispatch(changeCity(city))
    props.history.push("/")
  }

  return (
    <div>
      <PubHeader title={"选择城市"}/>
      <CurrentCity city={city}/>
      <ChoiceCity changeCity={toChangeCity} cityArr={cityArr}/>
      <CityLists changeCity={toChangeCity}/>
    </div>
  )
}

export default City