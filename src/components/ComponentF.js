import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (name)=>{
                        return( <h1> the context is  passed properly : {name} </h1> )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
