import React, { Component } from 'react'
import SetStateDome from '../01_setState'

/**
 * 插槽的使用
 */
export default class SlotA extends Component {
  render() {
    return (
      <div>
        <SlotB render={name => <SetStateDome name={name}/>}></SlotB>
      </div>
    )
  }
}

class SlotB extends Component {
  state = {
    name: "SlotB 传过来的"
  }
  render() {
    return (
      <div>
        {/* 类似默认插槽的使用 */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class SlotC extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
