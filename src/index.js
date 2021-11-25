import React from 'react';
import ReactDOM from 'react-dom';

// demo01  jsx: js + XML
// <> 识别为XML， {} 识别为js
// const react = 'React'
// ReactDOM.render(<div>hello {react}</div>,document.getElementById('root')
// );


//demo02   元素渲染
// function tick(){
//   const element = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is { new Date().toLocaleTimeString() }</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)

// demo03 组件  xx.js  xx.jsx
// props  单向数据流
import App from './App';
ReactDOM.render(<App/>, document.getElementById('root'))

// demo04 state的使用   
// StateComponent
// state 更新是同步还是异步的问题： 1.可控下是异步的（虚拟dom，异步更新）；   2.不可控为同步（这个我也不知道）
// 获取更新后的state： 1）setState({}, fn) 通过fn回调函数去获取到更新后的state  2）通过使用promise包裹， 返回会new promise， 再使用async await阻塞的方式可以拿到更新后的state

// demo05 生命周期
// LiveComponent
/**
 * componentWillMount: 组件渲染之前执行
 * componentDidMount: 组件渲染之后执行
 * shouldComponentUpdate: 返回 true|false, true代表允许修改， false代表不允许修改
 * componentWillUpdate: 数据在改变之前执行(state, props)
 * componentDidUpdate: 数据修改完成后执行(state,props)
 * componentWillReveiceProps: prpos发生修改时执行
 * componentWillUnmount: 组件卸载前执行
 */

// demo06 条件渲染
// IfComponent

// demo07 条件渲染
// KeyComponent

// demo08  表单， 表单元素的处理比较特殊
// 1.受控组件  需要为每种input编写事件监听，非常麻烦； 虽然官网推荐使用这个但是表单数据比较多的时候还是使用 非受控组件 好一点
// 2.非受控组件
//   前置知识： refs & Dom    RefDemo
// RefsForm

