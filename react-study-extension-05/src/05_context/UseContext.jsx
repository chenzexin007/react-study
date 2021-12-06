import React, { Component } from 'react'

/**
 * 使用contetx 上下文环境，可以子孙组件访问到祖先组件的数据
 * 1. 声明： const MyContext = React.createContext()
 * 2. 传递 <MyContext.Provide value={xxx}></MyContext.Provide>
 * 2. 获取
 *   第一种（子孙是类）：
 *    1)举手获取 static contextType = MyContext
 *    2) 通过this.context 获取
 *   第二种（子孙是类或者函数都可以使用）：
 *    <MyContext.Consumer>
 *      value => {  return `${value}` }
 *    </MyContext.Consumer>
 *    
 */

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
  state = {
    name: "lilei",
    age: 18
  }
  render() {
    return (
      <div>
        <h2>A</h2>
        <Provider value={{name: this.state.name, age: this.state.age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h2>B</h2>
        <C/>
      </div>
    )
  }
}

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     return (
//       <div>
//         <h2>C</h2>
//         <div>name: {this.context.name}--- age: {this.context.age}</div>
//       </div>
//     )
//   }
// }

function C(){
  return (
    <div>
      <h2>C</h2>
      <div>
        <Consumer>
          {
            value => {
              return `name: ${value.name}--- age: ${value.age}`
            }
          }
        </Consumer>
      </div>
    </div>   
  )
}
