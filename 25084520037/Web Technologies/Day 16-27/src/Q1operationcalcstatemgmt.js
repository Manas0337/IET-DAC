import React, { useState, useEffect } from 'react';

const OperationCalculator = ({ num1, num2, operation }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    switch (operation) {
      case 'Addition':
        setResult(num1 + num2);
        break;
      case 'Subtraction':
        setResult(num1 - num2);
        break;
      case 'Multiplication':
        setResult(num1 * num2);
        break;
      case 'Division':
        setResult(num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero');
        break;
      default:
        setResult('Invalid operation');
    }
  }, [num1, num2, operation]);

  return (
    <div>
      <h3>Operation: {operation}</h3>
      <p>Result: {result}</p>
    </div>
  );
};

export default OperationCalculator;
