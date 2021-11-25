import React from 'react'
export default class ChildTwo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h2>美元： <input type="text" value={this.props.money} /></h2>
      </div>
    )
  }
}