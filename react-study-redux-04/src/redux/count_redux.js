import { INNUMBER, UNNUMBER } from "./constant"
const initState = 0
export default function countRedux(preState=initState, actions){
  console.log(preState, actions)
  const { type, data } = actions
  switch(type){
    case INNUMBER:
      return preState + data
    case UNNUMBER:
      return preState - data
    default:
      return preState
  }
}