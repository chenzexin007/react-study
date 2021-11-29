import React from 'react'
import { Redirect, Prompt } from 'react-router-dom'
export default class Shop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin: true,
      value: ''
    }
  }

  componentDidMount(){
    let query = new URLSearchParams(this.props.location.search)
    this.setState({
      isLogin: query.get("isLogin")
    })
  }

  toHome = () => {
    // push、replace都可以实现跳转，但是replace是替换，push的压栈，replace销毁上一个路由，push没有销毁上一个路由
    // this.props.history.push("/")
    this.props.history.replace("/")
  }

  inputValue = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

  render(){
    return (
      <div>
        {
          this.state.isLogin ? <div>shop页面</div> : <Redirect to='/'/>
        }
        <Prompt
          when={this.state.vlaue != ''}
          message="表单内容未提交，是否选择离开？"
        />
        输入内容： <input type="text" value={this.state.value} onChange={this.inputValue}/>
        <button onClick={ this.toHome }>回到首页</button>
      </div>
    )
  }
}