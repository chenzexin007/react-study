import { INNUMBER, UNNUMBER } from "../constant"
// import Store from "./store"
// 同步action 返回值时 {}
export const createInNumberAction = data => ({ type:INNUMBER, data  })
export const createUnNumberAction = data => ({ type:UNNUMBER, data  })

// 异步action 返回值是 函数
export const createInNumberAsyncAction = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      // Store.dispatch(createInNumberAction(data))
      // 异步action最终也一定会调用同步action， 所以内部封装默认帮我们在形参放置了dispatch
      dispatch(createInNumberAction(data))
    }, time)
  }
}