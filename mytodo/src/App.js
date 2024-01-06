
import React from 'react'
import Check from './Check'

function App() {

  
  const ab=10 ;

  // for (let i = 0; i < ab; i++) {

  
  //   console.log(i)


  // }

  const ganashen= 'shamnad'

  const abcd='hiiiii daaa'

  return (
    <div>
      <h1>hello {ab} </h1>

      <h1>hiiiii</h1>

      <Check data={ab}/>

      <Check data={ganashen} />

      <Check ho={abcd} />
      

    </div>
  )
}

export default App
