import React,{ Component } from 'react'
import { render } from 'react-dom'
import './home.less'
import LoginedTop from '../Top/LoginedTop.js'
import HomeBar from '../Bar/HomeBar.js'
import ArticleListContainer from '../ArticleList/ArticleListContainer.js'
import { fetchArticleList } from '../../actions/AriticleListAction'
import { Router, Route, Redirect , Link ,IndexRoute,hashHistory } from 'react-router'
import Loading from '../../components/Loading/Loading'
import { connect } from 'react-redux';
class Home extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {
            articleList
            } = this.props;
        //let children =React.cloneElement(this.props.children,{articlelist:articleList,dispatch:this.props.dispatch})
        //this.props.dispatch(fetchArticleList({pageNum: 1,type:'class'}))
        return <div>
                <div className="header">
                    <Loading isFetching={articleList.isFetching} />
                    <LoginedTop />
                    <HomeBar {...this.props} />
                </div>
                <div className="listWrapper">
                    {this.props.children}
                </div>
               </div>
    }
}
export default connect(state=>{
    return {
        articleList : state.articleList
    }
})(Home)
//export default Home