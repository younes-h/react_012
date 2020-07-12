import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName : "ahmed"
        }
        this.GreetParent=this.GreetParent.bind(this)
    }

    GreetParent(){
        // eslint-disable-next-line no-template-curly-in-string
        alert(`hi my parent ${this.state.ParentName} `);
    }
    
    render() {
        return (
            <div>
                <Child eventhandler2={this.GreetParent}></Child>
            </div>
        )
    }
}

export default Parent
