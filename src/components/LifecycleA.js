import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : ''
        }
        console.log("constructor called")
    }
    static getDerivedStateFromProps(props,state){
        console.log(" LifecycleA getDerivedStateFromProps called ")
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount called")
    }
    shouldComponentUpdate(){
        console.log('should component update called')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log(' getSnapshotBeforeUpdate called')
        return null
    }
    componentDidUpdate(){
    console.log(' componentDidUpdate called')
    }
    render() {
        console.log("render method called")
        return (
            <div>
               lifecycle A 
            </div>
        )
    }
}

export default LifecycleA