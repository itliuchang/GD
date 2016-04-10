import React,{ Component } from 'react'
import { render } from 'react-dom'
import './tagContainer.less'
class TagContainer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="TagContainer">
            <img src="http://ac-mhke0kuv.clouddn.com/0d614af263aa63aa6a77.png" />
            <div className="title">Github</div>
            <div className="tagWrapper">
                <span>100 关注</span>
                <span>100 文章</span>
            </div>
        </div>
    }
}
export default TagContainer