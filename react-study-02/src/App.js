import React, { useLayoutEffect } from 'react';
import { Button,Pagination } from 'antd'
import qs from 'querystring'

import { getIndexMovement, login } from "./api/index"
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movement: []
    }
  }

  componentDidMount(){

    // 跨域demo
    // fetch("/FingerUnion/data.json").then(res => { res.json() })
    // .then(res => {
    //   console.log(res)
    // })

    // 手动配置跨域代理demo
    // fetch("/api/list").then(res => res.json())
    // .then(res => {
    //   console.log(res)
    // })

    getIndexMovement().then(res => res.json())
    .then(data => {
      this.setState({
        movement: data.movement
      })
    })
    
    // fetch("http://iwenwiki.com/api/blueberrypai/getIndexMovement.php").then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({
    //     movement: data.movement
    //   })
    // })

    login({
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"      
    }).then(res => res.json())
    .then(data => {
      console.log(data)
    })

    // fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Accept": "application/json,text/plain,*/*"
    //   },
    //   body: qs.stringify({
    //     user_id: "iwen@qq.com",
    //     password: "iwen123",
    //     verification_code: "crfvw"
    //   })
    // }).then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
  }

  render(){
    const { movement } = this.state
    return (
      <div className="App">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Pagination defaultCurrent={1} total={50} />
        {
          movement.length ? 
            <ul>
              {
                movement.map((ele, index) => {
                  return (
                    <li key={index}>
                      <p>title: {ele.title}</p>
                      <p>writer: {ele.writer}</p>
                      <p>like: {ele.like}</p>
                    </li>
                  )
                })
              }
            </ul>
          : <div>内容加载中...</div>
        }
      </div>
    )
  }
}

export default App;
