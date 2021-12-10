## 实现首页展示
1. 创建页面： Home/Shop/LiveService/User
2. 创建路由
     - 安装依赖： npm install --save react-router-dom
     - 配置AppRouter文件
3. 底部导航
4. iconfont的使用
5. 顶部导航
6. 轮播图
     - 参考文档： https://react-swipeable-views.com/
     - 安装依赖：
          ```js
          npm install --save react-swipeable-views
          npm install --save react-swipeable-views-utils
          ```
7. 搭建服务器获取数据
     - 安装依赖：
          ```js
          npm install --save express
          npm install --save cors
          ```
     - 跨域后台使用cors中间件解决
     - 数据来源本地js文件模拟数据

## 城市管理页面实现
1. City路由页面
2. 嵌套路由，使用layout布局划分二级路由
3. 实现三个组件 PubHeader、CurrentCity、ChiceCity
4. 集成Redux： 用来存储城市页面，根据城市不同，渲染不通的UI
     - Store Reducers Actions
     - 安装依赖
     ```js
     npm install --save redux
     npm install --save react-redux
     npm install --save redux-devtools-extension
     ```
5. redux流程
     - constants 常数文件夹
     - store
     ```js
     import { createStore } from "redux"
     // 使用工具
     import { composeWithDevTools } from "redux-devtools-extension"
     import rootReducer from "../reducers";
     // 引入我们写的reducer， createStore并导出
     const store = createStore(rootReducer, composeWithDevTools())
     export default store;
     ```
     - reducers  初始化state 和 接收actions改变state
     ```js
     import { combineReducers } from "redux"
     import city from "./city"
     // 使用 combineReducers 合并所有reducer
     const rootReducer = combineReducers({
          city
     })
     export default rootReducer;    
     ```
     - actions 定义actions方法，等待dispatch即可
     - 关联redux
     ```js
     // 第一步 根路径
     import { Provider } from "react-redux"
     import store from "./redux/store"
     <Provider store={store}>
          <AppRouter/>
     </Provider>
     // 第二步 有传统方式使用connect， 但是我们这里安装了react-redux，可以利用工具
     import { useSelector, useDispatch } from "react-redux"
     import { changeCity } from "../../redux/actions/city"
     // 获取 state
     const city = useSelector( state => state.city )
     // 修改 state
     const dispatch = useDispatch()
     dispatch(changeCity(city))
     ```
6. 页面数据根据城市切换
7. 城市列表ABC形式显示
     - 安装依赖
     ```js
     npm i react-city-select
     ```