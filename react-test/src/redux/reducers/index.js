import { combineReducers } from "redux"
import city from "./city"
import searchKey from "./searckKey"
// 使用 combineReducers 合并所有reducer
const rootReducer = combineReducers({
  city,
  searchKey
})

export default rootReducer;