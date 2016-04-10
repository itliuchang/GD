import React,{ Component , PropTypes } from 'react'
import { render } from 'react-dom'
import ArticleList from './ArticleList.js'
import { fetchArticleList } from '../../actions/AriticleListAction'
import { connect } from 'react-redux';
class ArticleListContainer extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchArticleList({pageNum: 1,type:this.props.route.path}))
    }
    componentWillReceiveProps(nextProp){
        let pages = Math.ceil(nextProp.articleList.Alldata[nextProp.route.path].length/nextProp.articleList.params.pageSize)
        if(nextProp.route.path!=this.props.route.path&&pages>1){
            nextProp.dispatch(fetchArticleList({pageNum: pages,type:nextProp.route.path}));
        }
    }
    render(){
        console.log(this.props)
        const {
            articleList
            }=this.props
        return <div>
            <ArticleList data={articleList} {...this.props} />
        </div>
    }
}
ArticleList.propTypes={
    articleList:PropTypes.object
}
export default connect(state=>{
    return {
        articleList : state.articleList
    }
})(ArticleListContainer)