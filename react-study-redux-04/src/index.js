import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
  // 使用provider 在最外层传递store，这样就不用给每一个container容器传递store了
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


/**
 * 使用react-redux 后，不再需要手动监听state的改变
 * 原因： container容器包裹ui组件， react-redux插件默认在container容器中监听了state的改变，主动触发了render
 */
// Store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );  
// })
