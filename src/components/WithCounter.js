import React,{Component} from 'react'

const UpdatedComponent= (OriginalComponent,step) =>{  

  class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count : 0
            }
        }
        incrementCounter =()=>{
            this.setState(
                (prevState) =>{
                return{count:prevState.count+step}
                }
            )
        }
       render() {
           return (
               <OriginalComponent 
                  cnt={this.state.count}
                  cntHandler={this.incrementCounter} 
                  {...this.props}
              />
           )
       }
   }
   return NewComponent

}

export default UpdatedComponent