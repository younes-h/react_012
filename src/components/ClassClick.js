import React, { Component } from 'react'

export class ClassClick extends Component {


     clickhandler(){
        console.log("button clicked via class component");

    }

    render() {
        return (
            <div>
                 <button onClick={this.clickhandler}  >ClassClick</button>
            </div>
        )
    }
}

export default ClassClick
