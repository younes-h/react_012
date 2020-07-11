import React , {Component } from 'react';


class Welcom extends Component {

    render(){
        return (
            <div>
              <h1>{this.props.name} is sayinng : i know {this.props.skill} </h1>
              {this.props.children}
              <h3>--------------</h3>
            </div>
        )
    }
}

export default Welcom;