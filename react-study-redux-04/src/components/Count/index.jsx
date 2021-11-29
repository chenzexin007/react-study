import React, { Component } from 'react'
import Store from "../../redux/store"
import { createInNumberAction, createUnNumberAction, createInNumberAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
  constructor(props){
    super(props)
  }

  inNumber = () => {
    // this.setState({
    //   all: this.state.all + Number(this.selectNumber.value)
    // })
    // Store.dispatch({ type: "inNumber", data: this.selectNumber.value*1 })
    Store.dispatch(createInNumberAction(this.selectNumber.value*1))
  }

  unNumber = () => {
    // this.setState({
    //   all: this.state.all - Number(this.selectNumber.value)
    // })
    // Store.dispatch({ type: "unNumber", data: this.selectNumber.value*1 })
    Store.dispatch(createUnNumberAction(this.selectNumber.value*1))
  }

  jishuNumber = () => {
    const value = Number(this.selectNumber.value)
    if(this.state.all % 2 !== 0){
      this.setState({
        all: this.state.all + value
      })
    }
  }

  yibuNumber = () => {
    // setTimeout(() => {
    //   this.setState({
    //     all: this.state.all + Number(this.selectNumber.value)
    //   })      
    // })
    Store.dispatch(createInNumberAsyncAction(this.selectNumber.value*1, 500))
  }

  render() {
    return (
      <div>
        <h2>总数: {Store.getState()}</h2>
        <select ref={ c => this.selectNumber = c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.inNumber}>+</button>
        <button onClick={this.unNumber}>-</button>
        <button onClick={this.jishuNumber}>奇数时+</button>
        <button onClick={this.yibuNumber}>异步+</button>
      </div>
    )
  }
}
