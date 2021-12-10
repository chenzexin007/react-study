import { INIT_CITY, CHANGE_CITY } from "../constants"
// 对 city 进行对应处理的 reducer
const initState = {
  id: '111',
  title: '北京'
}

const city = (state = initState, action) => {
  const { city, type } = action
  switch(type){
    case INIT_CITY:
      return { ...city }
    case CHANGE_CITY:
      return { ...city }
    default:
      return state
  }
}

export default city