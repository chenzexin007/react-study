import React from 'react'
export default class ChildOne extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h2>人民币: <input type="text" value={this.props.money * 7} /></h2>
      </div>
    )
  }
}