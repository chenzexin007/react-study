import { createInNumberAction, createUnNumberAction, createInNumberAsyncAction } from '../../redux/actions/count'

import { connect } from "react-redux"

import React, { Component } from 'react'
// import Store from "../../redux/store"
// import { createInNumberAction, createUnNumberAction, createInNumberAsyncAction } from '../../redux/count_action'

class Count extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  inNumber = () => {

    this.props.jia(this.selectNumber.value*1)
  }

  unNumber = () => {

    this.props.jian(this.selectNumber.value*1)
  }

  jishuNumber = () => {
    const value = Number(this.selectNumber.value)
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
    
  }

  yibuNumber = () => {
    this.props.jiaAsync(this.selectNumber.value*1, 500)
  }

  render() {
    return (
      <div>
        <h2>Count:</h2>
        <h4>总数: {this.props.count}  person的人数: {this.props.length}</h4>
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

// function mapStateToProps(state){
//   return { count: state }
// }

// function mapDispatchToProps(dispatch){
//   return {
//     jia: (number) => dispatch(createInNumberAction(number)),
//     jian: (number) => dispatch(createUnNumberAction(number)),
//     jiaAsync: (number, time) => dispatch(createInNumberAsyncAction(number, time))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Count)

export default connect(
  state => ({ count: state.count, length: state.person.length }), // 这里的count相当于传了props，只是将state映射过来，所以可以随便改名
  {  // 映射actions
    jia: createInNumberAction,
    jian: createUnNumberAction,
    jiaAsync: createInNumberAsyncAction   
  }
)(Count)