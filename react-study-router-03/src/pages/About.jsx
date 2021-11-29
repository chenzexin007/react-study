import React from 'react'
import ChildPage from './ChildPage'
export default class About extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.location,this.props.match.params.id)
  }

  render(){
    return (
      <div>
        <h2>params参数的获取</h2>
        About id: {this.props.match.params.id}  name: {this.props.match.params.name}
        <ChildPage/>
      </div>
    )
  }
}