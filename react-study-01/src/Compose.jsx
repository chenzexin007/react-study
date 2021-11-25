import React from 'react'
export default class Compose extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        组合: {this.props.children}
      </div>
    )
  }
}