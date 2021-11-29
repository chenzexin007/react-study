// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Nav from './components/Nav/index';
import PropPage from './pages/PropPage';
import Shop from './pages/Shop';
import Book from "./pages/qiantaoluyou/Book"
import WebBook from './pages/qiantaoluyou/WebBook';
import JavaBook from './pages/qiantaoluyou/JavaBook';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        {/* Switch  只加载一个页面， 把404放最后面，都匹配不上就选他，和node的路由有点像
        exact:当访问子路径时不加载, 例如 /About时， 不加载 /
        strict: 完全匹配这个路由时才加载, 例如 /About/时并不会加载/About对应组件页面
         */}
        <Switch> 
          {/* <Redirect from="/About" to="/"></Redirect> */}
          <Route exact path="/" component={ Home }></Route>
          <Route strict path="/About/:id?/:name?" component={ About }></Route>
          <Route strict path="/PropPage" render = { (props) => <PropPage  {...props} name="223" /> }></Route>
          <Route path="/Shop" component={ Shop }></Route>
          {/* /Book
          /Book/WebBook
          /Book/JavaBook */}
          <Book>
            <Switch>
              <Route path="/Book/WebBook" component={WebBook}></Route>
              <Route path="/Book/JavaBook" component={JavaBook}></Route>
            </Switch>
          </Book>
          <Route component={ NotFound }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
