import React, { useState } from "react"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./style.scss"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper = (props) => {
  const [index, setIndex] = useState(0)

  const handleChangeIndex = index => {
    setIndex(index)
  };

  return (
    <div className="swiper">
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {
          props.swipers.map((ele, index) => {
            return  (
              <div key={index} className="swiper-item">
                <img src={ele} alt="" />
              </div>
            )
          })
        }
      </AutoPlaySwipeableViews>
    </div>
  )
}

export default Swiper;