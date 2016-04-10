import React,{ Component } from 'react'
import { render } from 'react-dom'
import '../Home/home.less'
import LoginedTop from '../Top/LoginedTop.js'
import SubscribeBar from '../Bar/SubscribeBar'
import Tag
import { Router, Route, Redirect , Link ,IndexRoute,hashHistory } from 'react-router'
import { connect } from 'react-redux';
class SubscribeContainer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <div className="header">
                <LoginedTop />
                <SubscribeBar />
                <TagWrapper />
            </div>
        </div>
    }
}
export default SubscribeContainer