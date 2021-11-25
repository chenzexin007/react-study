import React from 'react'
export default class IfComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      dataList: []
    }
  }

  toLogin = () => {
    this.setState({
      isLogin: true
    })
  }

  render(){
    let view = this.state.isLogin ? <div>信息页</div> : <div>登录页</div>
    let { dataList } = this.state
    return (
      <div>
        {view}
        <button onClick={this.toLogin}>登录</button>
        {
          dataList.length ? 
            <ul>
              { dataList.map((ele, index) => {
                return <li key={index}>{ele}</li>
              }) }
            </ul>
            : <div>暂无内容</div>
        }
      </div>
    )
  }
}