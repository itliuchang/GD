import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import './loading.less'
class Loading extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {isFetching}=this.props;
        let fetch = isFetching?'act':'';
        return <div>
            <div className={isFetching?'loading act':'loading'}></div>
        </div>
    }
}
export default Loading