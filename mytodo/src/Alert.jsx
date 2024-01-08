
import React, { useState } from 'react';

function Alert() {
  const [inputText, setInputText] = useState('');

  const alertbox = () => {
    alert(` ${inputText}`);
  };

  return (
    <div>
      <h2>Enter your text </h2>
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


