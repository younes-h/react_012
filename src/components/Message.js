import React , {Component } from 'react';


class Message extends Component {

    constructor(){
        super();
        this.state = {
            message: 'welcome :) to my internal state '
        }
    }

    changemessage(){
        this.setState({message: 'thank you for your visit from my internal state'}) ; 
    }

    render(){
        return (
            <div>
              <h1>{this.state.message} </h1>
              <button onClick={()=> this.changemessage()}> register </button>
            </div>
        )
    }
}

export default Message;