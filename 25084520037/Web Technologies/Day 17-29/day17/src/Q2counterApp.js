
import React, { useState, useEffect } from 'react';

function AppCount() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (count !== 0) {
      setHistory(prev => [...prev, count]);
    }
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div >
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>- Decrement</button>
      <button onClick={reset}>🔄 Reset</button>

      {history.length > 0 && (
        <div >
          <h2>Counter History</h2>
          <table border="1" style={{ margin: '0 auto' }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {history.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AppCount;
