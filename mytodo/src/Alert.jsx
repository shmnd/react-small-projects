import React, { useState } from 'react'

function Alert() {

  const [state,setState]=useState('')
  const alertbox=()=>{
           
  }


  return (
    <div>
      {/* <input type="text" /> */}
      <input type="text" value={inputText}/>

      <button onClick={alertbox}> submit </button>
    </div>
  )
}

export default Alert

import React, { useState } from 'react';

function Alert() {
  const [inputText, setInputText] = useState('');

  const alertbox = () => {
    alert(`You entered: ${inputText}`);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={alertbox}>Submit</button>
    </div>
  );
}

export default Alert;


