import React, { Component } from 'react'
// import qs from"querystring"
const data = [
    { id: '01', content: "雄关漫道真如铁" },
    { id: '02', content: "人间正道是沧桑" },
    { id: '03', content: "长风破浪会有时" }]

export default class index extends Component {
    render() {
        // 把search收到的参数转化为json格式
        // const querystring = require('querystring');
        const { id, title } = this.props.match.params
        // console.log(search);
        console.log(this.props.location.state);
        // const {id,title}=require(search.slice(1))
        // console.log(this.props);D
        const dcon = data.find((a) => {
            return a.id === id
        })
        return (
            <div>
                <ul>
                    <li>{dcon.content}</li>
                </ul>
            </div>
        )
    }
}
