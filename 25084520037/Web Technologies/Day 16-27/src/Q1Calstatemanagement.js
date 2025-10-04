
import React from 'react';

const Calculator = ({ num1, num2 }) => {
  const a = Number(num1);
  const b = Number(num2);

  return (
    <div>
      <h3>Calculator</h3>
      <p>Addition: {a + b}</p>
      <p>Subtraction: {a - b}</p>
      <p>Multiplication: {a * b}</p>
      <p>Division: {b !== 0 ? (a / b).toFixed(2) : 'Cannot divide by zero'}</p>
    </div>
  );
};

export default Calculator;
