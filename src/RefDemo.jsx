import React from "react";
export default class RefDemo extends React.Component{
  constructor(props){
    super(props)
    this.HelloRef = React.createRef()
  }

  componentDidMount(){
    console.log(this.HelloRef)
    this.HelloRef.current.style.color = 'red'
  }

  render(){
    return (
      <div>
        <h2 ref={this.HelloRef}>ref 的操作 Dom</h2>
      </div>
    )
  }
}