import React from "react";
export default class RefsForm extends React.Component{
  constructor(props){
    super(props)
    this.nameRef = React.createRef();
    this.passwordRef = React.createRef()
  }

  submitFormData = (e) => {
    e.preventDefault()

    console.log(this.nameRef.current.value, this.passwordRef.current.value)
  }

  render(){
    return (
      <div>
        <h2>非受控组件  -- ref & Dom</h2>
        <form onSubmit={this.submitFormData}>
          <input type="text" ref={this.nameRef}/>
          <input type="password" ref={this.passwordRef}/>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}