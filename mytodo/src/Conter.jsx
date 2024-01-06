import React, { useState } from 'react'

function Conter() {

    const [state,setState]=useState(0)

    const add=()=>{
        setState(state+1)
    }


  return (
    <div>
      
    <h1>counter: {state}</h1>
    <button onClick={add}>add value</button>


    </div>
  )
}

export default Conter
