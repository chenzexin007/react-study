import React, { Component } from 'react'

// class编程
// export default class StateHook extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   toAddCount = () => {
//     this.setState({
//       count: this.state.count+1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <div>count: {this.state.count}</div>
//         <button onClick={this.toAddCount}>count++</button>
//       </div>
//     )
//   }
// }  


/**
 * 
 * 使用Hook： 因为纯函数是没有this的， 不能使用state，声明周期这些
 *  例如： useState、 useEffect、 useRef()这些
 */
// 函数式编程
export default function StateHook(){
  // 每次值得改变都会重新执行StateHook函数， 所以下面的初始化0都会被再次执行，只是Hook底层帮我们处理了，所以不会被重置为0
  // 参数1： state； 参数2： updateState 函数
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("lilei")
  const countRef = React.useRef()
  /**
   * 使用React.useEffect可以利用两个生命周期函数
   * 1. 第二个参数不传时， 代表监测所有的state的改变，相当 componentDidUpdate
   * 2. 第二个参数传
   *   1)[], 空数组，state全都不监测， 相当于componentDidMount
   *   2)[count], 只监听count的改变
   */
  React.useEffect(() => {
    setInterval(() => {
      setCount(count => count+1)
    }, 1000)
  }, [])

  function toAddCount(){
    // 第一种修改方法
    // setCount(count+1)
    // 第二种修改方法
    setCount(count => count+1)
  }

  function toChangeName(){
    setName("zhangsan")
    // setName(name => name="zhangsan")
  }

  function alertInput(){
    alert(countRef.current.value)
  }

  return (
    <div>
      <div>
        count: {count}
        <button onClick={toAddCount}>count++</button>
      </div>
      <div>
        name: {name}
        <button onClick={toChangeName}>changeName</button>
      </div> 
      <input type="text" ref={countRef} />  
      <button onClick={alertInput}>点击alert  input</button>  
    </div>      
  )
}
