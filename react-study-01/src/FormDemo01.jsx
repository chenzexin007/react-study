import React from "react";
export default class FormDemo01 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    console.log(this.state.value)
  }

  changeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <div>
        <h2>受控组件</h2>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.changeInput} value={this.state.value} />
          <input type="submit" value="提交"></input>
        </form>
      </div>
    )
  }
}