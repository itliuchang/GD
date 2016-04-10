import React,{ Component,PropTypes } from 'react'
import { render } from 'react-dom'
import './UnlineButton.less'
class UnlineButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { content } = this.props
        return <div>
            <div className={this.props.act?'UnlineButton act':'UnlineButton'}>
                <div className="content">{content}</div>
            </div>
        </div>
    }
}
UnlineButton.propTypes={
    content:PropTypes.string
}
export default UnlineButton