import React from 'react';

function Factorial({ number }) {
  const calculateFactorial = (n) => {
    if (n < 0) return 'Invalid input';
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  return (
    <div>
      <h2>Factorial of {number} is {calculateFactorial(number)}</h2>
    </div>
  );
}
export default Factorial;