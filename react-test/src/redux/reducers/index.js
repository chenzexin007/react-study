import { combineReducers } from "redux"
import city from "./city"
// 使用 combineReducers 合并所有reducer
const rootReducer = combineReducers({
  city
})

export default rootReducer;