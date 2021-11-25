import React from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
export default class Parent extends React.Component{
  constructor(){
    super()
    this.state = {
      money: 1
    }
  }

  changeMoney = (e) => {
    this.setState({
      money: e.target.value
    })
  }

  render(){
    return (
      <div>
        <h2>Parent <input type="text" value={this.state.money} onChange={this.changeMoney}/></h2>
        <ChildOne money={this.state.money}/>
        <ChildTwo money={this.state.money}/>
      </div>
    )
  }
}