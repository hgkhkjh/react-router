import React, { Component } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import Detail from './Detail/index'
export default class index extends Component {
    state = {
        a: [
            { id: '01', title: "今天" },
            { id: '02', title: "明天" },
            { id: '03', title: "后天" }
        ]
    }
    pushbtn=(id,title)=>{
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
    replacebtn=(id,title)=>{
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    gobackbtn=()=>{
        this.props.history.goBack()
    }
    goforwardbtn=()=>{
        this.props.history.goForward()

    }
    gobtn=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.a.map((a) => {
                            return (<li key={a.id}>
                                {/* 发送prams参数 */}
                                <Link to={`/home/message/detail/${a.id}/${a.title}`}>{a.title}</Link>
                                {/* 发送search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${a.id}&title=${a.title}`}>{a.title}</Link> */}
                                {/* 发送state参数 */}
                                {/* <Link to={{pathname:'/home/message/detail',state:{id:a.id,title:a.title}}}>{a.title}</Link> */}
                                 &nbsp;
                                 &nbsp;
                                 <button onClick={()=>this.pushbtn(a.id,a.title)} >push</button>
                                 &nbsp;
                                 <button  onClick={()=>this.replacebtn(a.id,a.title)}>require</button>
                            </li>)
                        })
                         
                    }
                </ul>
                <Route path="/home/message/detail/:id/:title" component={Detail} />
                <br />
                <button onClick={this.gobackbtn}>goback</button> &nbsp;
                <button onClick={this.goforwardbtn}>goforward</button> &nbsp;
                <button onClick={this.gobtn}>go</button>
            </div>
        )
    }
}
