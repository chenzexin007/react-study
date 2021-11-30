import React, { Component } from 'react'
// import Store from "../../redux/store"
// import { createInNumberAction, createUnNumberAction, createInNumberAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  inNumber = () => {
    // this.setState({
    //   all: this.state.all + Number(this.selectNumber.value)
    // })
    // Store.dispatch({ type: "inNumber", data: this.selectNumber.value*1 })
    // Store.dispatch(createInNumberAction(this.selectNumber.value*1))
    this.props.jia(this.selectNumber.value*1)
  }

  unNumber = () => {
    // this.setState({
    //   all: this.state.all - Number(this.selectNumber.value)
    // })
    // Store.dispatch({ type: "unNumber", data: this.selectNumber.value*1 })
    // Store.dispatch(createUnNumberAction(this.selectNumber.value*1))
    this.props.jian(this.selectNumber.value*1)
  }

  jishuNumber = () => {
    const value = Number(this.selectNumber.value)
    // const state = Store.getState()
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
      // Store.dispatch(createInNumberAction(value*1))
    }
    
  }

  yibuNumber = () => {
    // setTimeout(() => {
    //   this.setState({
    //     all: this.state.all + Number(this.selectNumber.value)
    //   })      
    // })
    // Store.dispatch(createInNumberAsyncAction(this.selectNumber.value*1, 500))
    this.props.jiaAsync(this.selectNumber.value*1, 500)
  }

  render() {
    return (
      <div>
        <h2>总数: {this.props.count}</h2>
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
