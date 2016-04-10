import React,{ Component , PropTypes } from 'react'
import { render } from 'react-dom'
import ArticleList from './ArticleList.js'
import { fetchArticleList } from '../../actions/AriticleListAction'
import { connect } from 'react-redux';
class ProvinceListContainer extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchArticleList({pageNum: 1,type:'province'}))
    }
    componentWillReceiveProps(nextProp){
        //let pages = Math.ceil(nextProp.articleList.Alldata[nextProp.route.path].length/nextProp.articleList.params.pageSize)
        //if(nextProp.route.path!=this.props.route.path&&pages>1){
        //    nextProp.dispatch(fetchArticleList({pageNum: pages,type:nextProp.route.path}));
        //}
    }
    nextPage(){
        this.props.dispatch(fetchArticleList({pageNum:this.props.articleList.class.params.pageNum+1,type:'province'}))
    }
    render(){
        const {
            data
            }=this.props.articleList.province
        return <div>
            <ArticleList nextPage={this.nextPage} data={data} {...this.props} />
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
})(ProvinceListContainer)