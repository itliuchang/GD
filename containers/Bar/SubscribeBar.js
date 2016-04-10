import React,{ Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux';
import  UnlineButton  from '../../components/Button/UnlineButton'
import './subscribebar.less'
class SubscribeBar extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="SubscribeBar">
            <UnlineButton content='已关注标签(1)' act="1" />
            <UnlineButton  content="未关注标签"/>
        </div>
    }
}
export default SubscribeBar