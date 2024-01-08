import React, { useState } from 'react';

function Test() {
  const [inputText, setInputText] = useState('');

  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
}


export default Test
