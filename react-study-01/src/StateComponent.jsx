import React from 'react'
export default class StateComponent extends React.Component{
  constructor(props){
    super(props)
    // 定义 state
    this.state = {
      count: 0,
      flag: true
    }
  }

  incount = () => {
    this.setState({
      count: this.state.count += 1
    })
  }

  decount = () => {
    this.setState({
      count: this.state.count -= 1
    })
  }

  changeName = () => {
    this.setState({
      flag: this.state.flag = !this.state.flag
    })
  }

  render(){
    const name = this.state.flag ? '大马猴' : '长鼻象'
    return (
      <div>
        <h2>state 使用</h2>
        <div>count: {this.state.count}</div>
        <button onClick={this.incount}>增加</button>
        <button onClick={this.decount}>减少</button>
        <div>name: {name}</div>
        <button onClick={this.changeName}>切换name</button>
      </div>
    )
  }
}