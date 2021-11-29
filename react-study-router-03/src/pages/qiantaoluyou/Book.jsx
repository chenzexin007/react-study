import React from 'react'
export default class Book extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        Book
        {this.props.children}
      </div>
    )
  }
}