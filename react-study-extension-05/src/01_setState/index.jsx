import React, { Component } from 'react'

export default class SetStateDome extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  toAddCount = () => {
    // 第一种：  第一个参数是 对象， 第二个参数是函数，可以获取到更新数据和dom后的 state
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log(this.state.count)
    // })

    // 第二种： 第一个参数是 函数， 第二个参数是函数，可以获取到更新数据和dom后的 state
    // 第二种主要是可以直接获取到state和props，不用重新去this.state.XX去索引
    this.setState((state, props) => {
      return { count: state.count+1 }
    }, () => {
      console.log(this.state.count)
    })
  }

  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.toAddCount}>+1</button>
      </div>
    )
  }
}
