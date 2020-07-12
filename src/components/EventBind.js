import React, { Component } from 'react'

 class EventBind extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
             message: " hello ..." 
         }
         //this is an event binding solution 
         //we use event binding because the "this" keyword
         //is not matched to the one who we want
         //so we have to bind when we deal with event handling
         this.eventhandler=this.eventhandler.bind(this)
     }

     eventhandler(){
         // this event handler is binded so
         // th "this" keyword is refered to the original this 
         // and that is what we want

        this.setState({
            message : "after changing the state  :) waw" 
        })
     }
     
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.eventhandler}>click event binding button</button>
            </div>
        )
    }
}

export default EventBind
