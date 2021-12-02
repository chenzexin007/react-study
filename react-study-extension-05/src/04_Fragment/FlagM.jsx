import React, { Component, Fragment } from 'react'

export default class FlagM extends Component {
  render() {
    return (

      // 可以使用Fragment | <> 表示无标签来避开jsx的语法检测， Fragment只能有key属性
      // <Fragment key={1}>
      //   <input type="text" />
      // </Fragment>
      <>
        <input type="text" />
      </>
    )
  }
}
