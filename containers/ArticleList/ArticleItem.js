import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import './articleitem.less'
import { timeFormate }  from '../../utils/time'
class ArticleItem extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        let tag;
        if(this.props.data.tags instanceof Array){
            tag = this.props.data.tags.map((o,i)=>{
                return (<Link to="/" {...this.props} className="tag">{o}</Link>)
            })
        }else{
            tag = this.props.data.tag
        }
        return <div className="ArticleItem">
                    <div className="collection">
                        <i className="iconfont">&#xe602;</i>
                        <span className="count clearfix">{this.props.data.lookNum}</span>
                    </div>
                    <div className="content">
                        <h3 className="title">{this.props.data.title}</h3>
                        <div className="tagWrapper">
                            <Link to="/" className="createTime" property="">{ timeFormate (parseInt(this.props.data.createTime)) }</Link>
                            {tag}
                        </div>
                    </div>
                    <div className="comment">
                        <i className="iconfont">&#xe603;</i>
                        <span className="count">{this.props.data.replyNum}</span>
                    </div>
               </div>
    }
}
export default ArticleItem