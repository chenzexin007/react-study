import React from "react";
export default class LiveComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount(){
    console.log('componentWillMount')   // 已废弃，仍可使用，但会警告
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps') // 已废弃，仍可使用，但会警告
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true  // 这里return Boolean 决定数据能否修改 、 后面的componentWillUpdate 、 componentDidUpdate 是否执行
  }

  componentWillUpdate(state,props){
    console.log('componentWillUpdate') // 已废弃，仍可使用，但会警告
  }

  componentDidUpdate(state,props){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  inCount = () => {
    this.setState({
      count: this.state.count += 1
    }, () => {
      // 通过回调函数可以拿到更新后的数据
      console.log(this.state.count)
    })
  }

  changeTitle = () => {
    this.props.changeTitle('来自子组件的数据')
  }

  render(){
    let { count } = this.state 
    return (
      <div>
        <h2>生命周期</h2>
        <div>count: {count}</div>
        <button onClick={this.inCount}>修改count</button>
        <div>props: {this.props.title}</div>
        <button onClick={this.changeTitle}>修改props</button>
      </div>
    )
  }
}