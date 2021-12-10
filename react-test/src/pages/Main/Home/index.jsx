import React from 'react'
import HeaderNav from "../../../components/HeaderNav"
import Swiper from '../../../components/Swiper'
import swiper_01 from "../../../assets/images/swiper_01.jpeg"
import swiper_02 from "../../../assets/images/swiper_02.jpeg"
import swiper_03 from "../../../assets/images/swiper_03.jpeg"
import HomeHotList from "./HomeHotList"
import { useSelector } from "react-redux"

const Home = () => {
  const city = useSelector(state => state.city)
  return (
    <div>
      <HeaderNav/>
      <Swiper swipers={[swiper_03, swiper_01, swiper_02]}/>
      <HomeHotList title={ city.title }/>
    </div>
  )
}

export default Home
