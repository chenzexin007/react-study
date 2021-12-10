import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router";
import "./assets/css/common.css"
import "./assets/css/iconfont.css"
// import App from './App';
import { Provider } from "react-redux"
import store from "./redux/store"



ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);

