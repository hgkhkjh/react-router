import './App.css';
import Home from './pages/home';
import About from './pages/about';
import { Route, Redirect,withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import MyNavLink from './components/MyNavLink';
class App extends Component {
  goo=()=>{
    this.props.history.push(`/home/message`)
  }
 
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 设置路由链接 */}
              <button onClick={this.goo}>前进</button>

              <MyNavLink to="/about" a={1} b={2}>about</MyNavLink>
              <MyNavLink to="/home">home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 路由注册 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(App)