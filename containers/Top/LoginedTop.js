import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import './top.less';
class LoginedTop extends Component{
    render(){
        return <div className="home-top">
                    <ul className="fl">
                        <li><Link to="/home/class" property="" className="act">首页</Link></li>
                        <li><Link to="/follow" property="">我的关注</Link></li>
                    </ul>
                    <ul className="right">
                        <li><i className="iconfont">&#xe600;</i></li>
                        <li><i className="iconfont">&#xe601;</i></li>
                        <li><img src="/images/avatar_girl.png" className="profilePhoto" /></li>
                    </ul>
               </div>
    }
}
export default LoginedTop