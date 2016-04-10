import React,{ Component , PropTypes } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import ArticleItem from './ArticleItem.js'
import './articleitem.less'
import { fetchArticleList } from '../../actions/AriticleListAction'
import { connect } from 'react-redux';
class ArticleList extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this._scroll = this._scroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll',this._scroll,false)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._scroll, false);
    }
    _scroll(){
        if(window.scrollY+window.innerHeight+10>document.body.clientHeight){
            this.props.nextPage.call(this)
        }
    }
    render(){
        const {
                data
            }=this.props
        console.log(this.props)
        let list = data.map((o,i)=>{
            return (<li><ArticleItem {...this.props} data={o} /></li>);
        });
        return <div className="ArticleList clearfix">
                    <ul>
                        {list}
                    </ul>
               </div>
    }
}
ArticleList.propTypes={
    articleList:PropTypes.object,
    nextPage:PropTypes.func.isRequired
}
export default connect(state=>{
    return {
        articleList : state.articleList
    }
})(ArticleList)