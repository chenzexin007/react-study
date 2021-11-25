import React, { useLayoutEffect } from 'react'

class Navigater extends React.Component{
  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {
            this.props.nav.map((ele, index) => {
              return <li key={index}>{ele}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Navigater