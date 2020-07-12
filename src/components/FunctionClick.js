import React from 'react'

function FunctionClick() {
    
    function clickhandler(){
      console.log("button clicked via function component ");

    }

    return (
        <div>
            <button  onClick={clickhandler} >FunctionClick</button>
        </div>
    )
}

export default FunctionClick
