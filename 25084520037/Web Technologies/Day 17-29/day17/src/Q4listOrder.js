import React, { useState } from 'react';

function TextListOnBlur() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleBlur = () => {
    if (inputValue.trim() !== '') {
      setListItems(prev => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enter Items</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="Type something and click away"
      />

      {listItems.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Your List:</h3>
          <ol>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default TextListOnBlur;
