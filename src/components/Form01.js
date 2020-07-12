import React, { Component } from 'react'

class Form01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             comment:'',
             skill:'react'
        }
        this.emailhandler=this.emailhandler.bind(this)
        this.commenthandler=this.commenthandler.bind(this)
        this.skillhandler=this.skillhandler.bind(this)
        this.submithandler=this.submithandler.bind(this)
    }
    emailhandler=(event)=>{
        this.setState({
            email : event.target.value
        })
        console.log(this.state.email)
    }
    commenthandler=(event)=>{
        this.setState({
            comment : event.target.value
        })
        console.log(this.state.comment)
    }
    skillhandler=(event)=>{
        this.setState({
            skill : event.target.value
        })
        console.log(this.state.skill)
    }
    submithandler=(event)=>{
        alert(` ${this.state.email}  ${this.state.comment}  ${this.state.skill}`)
        event.preventDefault()
    }
    
    render() {
        let { email, comment , skill}=this.state
        return (
            <form onSubmit={this.submithandler} >
                <label>type your email</label>
                <input 
                   type="text" 
                   value={email} 
                   onChange={this.emailhandler}>
                </input>
                <br></br>
                <label>type a comment </label>
                <textarea
                   type="text" 
                   value={comment} 
                   onChange={this.commenthandler}>
                   </textarea>
                   <br></br>
                <label>your skill</label>
                <select
                   type="text" 
                   value={skill} 
                   onChange={this.skillhandler}>

                            <option value="angular" >angular</option>
                            <option value="react" >react</option>
                            <option value="vue" >vue</option>
                </select>
              <br></br>
              <button type="submit" >submit</button>
        
            </form>
        )
    }
}

export default Form01
