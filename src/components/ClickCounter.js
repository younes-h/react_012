import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'


class ClickCounter extends Component {

    render() {
        const {cnt , cntHandler }=this.props
        return (
            <div>
                <button onClick={cntHandler} > {this.props.name} Click : {cnt}</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)
