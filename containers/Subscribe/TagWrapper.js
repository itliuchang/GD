import React,{ Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux';
import TagContainer from '../Tag/TagContainer'
class TagWrapper extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <TagContainer />
        </div>
    }
}
export default TagWrapper