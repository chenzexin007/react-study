import { createStore, applyMiddleware } from "redux"
import countRedux from "./count_redux"
import chunk from "redux-thunk"

// 必须使用applyMiddleware调用安装的chunk中间件，才可以使用异步action
export default createStore(countRedux, applyMiddleware(chunk))