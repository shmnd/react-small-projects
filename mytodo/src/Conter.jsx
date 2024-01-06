import React, { useState } from 'react'

function Conter() {

    const [state,setState]=useState(0)

    const add=()=>{
        setState(state+1)
    }


  return (
    <div>
      
    <button onClick={add}>add value</button>
    <h1>counter: {state}</h1>

    </div>
  )
}

export default Conter
