import React, { Component } from 'react'
import {Route,Redirect} from'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from "./Message"
import News from "./News"
export default class home extends Component {
    render() {
        return (
            <div>
                <h3>你需要战胜的不是别人，而是你自己</h3>
                <br />

                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                        {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                    </li>
                    <li>
                    <MyNavLink to="/home/message">Message</MyNavLink>
                        {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
                    </li>
                </ul>
                <div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            <div>
                                <div>
                                  <Route path="/home/news" component={News}></Route>
                                  <Route path="/home/message" component={Message}></Route>
                                     <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
