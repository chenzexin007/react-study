import { createStore, applyMiddleware, combineReducers  } from "redux"
import countRedux from "./reducer/count"
import personReducer from "./reducer/person"
import chunk from "redux-thunk"
// redux-devtools-extension 的使用
import { composeWithDevTools } from "redux-devtools-extension"
/**
 *  1. state是在store中定义
 *  2. state的初始化和加工在 reducer中进行
 *  3. 修改state需要dispatch一个action， store调用reducer处理加工
 *  4. 再从store中拿到state
 */
 const allReducer = combineReducers({
  count: countRedux,
  person: personReducer
})



// 必须使用applyMiddleware调用安装的chunk中间件，才可以使用异步action
export default createStore(allReducer, composeWithDevTools(applyMiddleware(chunk)))