import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={props.eventhandler2} >click me</button>
        </div>
    )
}

export default Child
