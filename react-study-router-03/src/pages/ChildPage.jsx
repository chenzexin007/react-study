import React from 'react'
import { withRouter } from 'react-router-dom'
class ChildPage extends React.Component{
  constructor(props){
    super(props)
  }

  toHome = () => {
    this.props.history.push("/")
  }  


  render(){
    return (
      <div>
        <button onClick={ this.toHome }>回到首页</button>
      </div>
    )
  }
}

// 高阶组件的使用
export default withRouter(ChildPage)