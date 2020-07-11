import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cntr:0
        }
    }

    increment(){
        this.setState({ cntr:this.state.cntr+1});
    }
    
    render() {
        return (
             <div>
                 <div>count value : {this.state.cntr}</div>
                 <button onClick={()=>{ this.increment() }  } >
                   increment
                 </button>
             </div>
            
        )
    }
}

export default Counter
