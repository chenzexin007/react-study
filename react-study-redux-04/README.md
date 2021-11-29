## 总结
 要修改state：
 1. 提交actions给store
  1）使用actions-creater创建actions
   同步action： 返回{ type: "", data: xx }
   异步action： 返回函数， 函数中最终也是调用了同步actions， 注意要使用chunk中间件才能使用异步actions
  2）使用dispatch提交actions给store
  3）store通知reduer去更新state
  4）使用store.subscribe监听所有state的改变，触发render，使用diff算法更新dom