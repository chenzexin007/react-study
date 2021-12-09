import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router";
import "./assets/css/common.css"
import "./assets/css/iconfont.css"
// import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

