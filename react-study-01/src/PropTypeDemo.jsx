import React from 'react'
import PropTypes from 'prop-types'
export default class PropTypeDemo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

PropTypeDemo.propTypes = {
  title: PropTypes.string
}

PropTypeDemo.defaultProps = {
  title: '标题'
}

