import React from 'react'
// import Home from './Home'
// import Navigater from './Navigater'
// import StateComponent from './StateComponent'
// import LiveComponent from './LiveComponent'
// import IfComponent from './IfComponent'
// import KeyComponent from './KeyComponent'
// import FormDemo01 from './FormDemo01'
// import RefDemo from './RefDemo'
import RefsForm from './RefsForm'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      // title: '文本1'
    }
  }

  // changeTitle = (data) => {
  //   this.setState({
  //     title: data
  //   })
  // }

  render(){
    // const nav1 = ["前端","后端","其他"]
    // const nav2 = ["WEB","JAVA/PY/NODE","OTHER"]
    let { title } = this.state
    return (
      <div>
        <h1>App</h1>
        {/* <Home/>
        <Navigater nav={nav1} title="中文导航"/>
        <Navigater nav={nav2} title="英文导航"/> */}
        {/* <StateComponent/> */}
        {/* <LiveComponent title={title} changeTitle={this.changeTitle} /> */}
        {/* <IfComponent/> */}
        {/* <KeyComponent/> */}
        {/* <FormDemo01/> */}
        {/* <RefDemo/> */}
        <RefsForm/>
      </div>
    )
  }
}

export default App