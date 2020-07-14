import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'


class HoverCounter extends Component {

    render() {
        const {cnt, cntHandler }=this.props
        return (
            <div>
                <button onMouseOver={cntHandler} >{this.props.name} hover : {cnt}</button>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,2)
