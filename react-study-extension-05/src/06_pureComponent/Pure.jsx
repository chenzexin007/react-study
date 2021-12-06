import React, { PureComponent } from 'react'

/**
 * Component会带来一些问题：
 *  1.setState({})的时候，父子组件都会做render，浪费性能
 *  2.子组件没有使用父组件的state， 但是父组件的state发生改变，子组件也render了，浪费性能
 * 解决： 使用 PureComponent 替换 Component
 *  会使用浅拷贝的方式判断 state 和 prop 的改变，从而决定是否触发父子组件的render
 */

export default class Pure extends PureComponent {
  state = {
    carName: "原车名"
  }

  changeCarName = () => {
    // this.setState({
    //   carName: "车名已换"
    // })
    this.setState({})
  }

  render() {
    console.log("parent render")
    const { carName } = this.state
    return (
      <div>
        <div>车名： {carName}</div>
        <button onClick={this.changeCarName}>换车名</button>
        <Child/>
      </div>
    )
  }
}


class Child extends PureComponent {
  render() {
    console.log("child render")
    return (
      <div>
        子标签
      </div>
    )
  }
}

