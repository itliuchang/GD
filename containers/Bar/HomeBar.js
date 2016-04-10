import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import './homebar.less'
import {fetchArticleList} from '../../actions/AriticleListAction'
import { connect } from 'react-redux';
class HomeBar extends Component{
    constructor(props) {
        super(props);
        console.log(props)
    }
    handle(props){
        //props.dispatch(fetchArticleList({pageNum:1,type:props.route.path}))
    }
    render(){
        return <div className="HomeBar clearfix">
                    <ul>
                        <li  className={ this.props.children.props.route.path == 'class' ? 'act' :'' }><Link to="/home/class" property="">班级</Link></li>
                        <li  className={ this.props.children.props.route.path == 'campus' ? 'act' :'' }><Link to="/home/campus" property="">本校</Link></li>
                        <li  className={ this.props.children.props.route.path == 'province' ? 'act' :'' }><Link to="/home/province" property="">本省</Link></li>
                        <li  className={ this.props.children.props.route.path == 'country' ? 'act' :'' }><Link to="/home/country" property="">全国</Link></li>
                    </ul>
                    <div className="follow"><Link to="/subscribe" property="">关注标签</Link></div>
               </div>
    }
}
export default connect(state=>{
    return {
        articleList : state.articleList
    }
})(HomeBar)