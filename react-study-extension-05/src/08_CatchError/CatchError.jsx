import React, { Component } from 'react'

export default class CatchError extends Component {

  state = {
    errorCh: ""
  }

  // 能捕获子组件的生命周期的错误， 但是只能在生产环境中使用，开发环境等待一会又报错
  static getDerivedStateFromError(error){
    console.log(error)
    return { errorCh:  error}
  }

  // 捕获组件渲染错误， 通过捕获错误统计错误次数， 埋点
  componentDidCatch(){
    console.log(" 向服务器发送错误类型bug， 达到错误统计， 提醒开发人员解决bug ")
  }

  render() {
    return (
      <div>
        { this.state.errorCh ? <h2>网络资源加载中.....</h2> : <Child/> }
      </div>
    )
  }
}


class Child extends Component {
  state = {
    // dataList: [
    //   { name: "lilei", age: 18 },
    //   { name: "liuxian", age: 31 },
    //   { name: "aiming", age: 67 }
    // ]
    dataList: "{}"
  }

  render() {
    return (
      <div>
        { this.state.dataList.map((item, key) => {
          return (
            <li key={key}>name: {item.name} --- age: {item.age}</li>
          )
        }) }
      </div>
    )
  }
}

