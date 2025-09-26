import React from 'react';

const OperationCalculator = ({ num1, num2, operation }) => 
  {
     const n1 = parseFloat(num1);
     const n2 = parseFloat(num2);
    const calculate = () => {
    switch (operation) {
      case 'Addition':
        return n1 + n2;
      case 'Subtraction':{
        console.log("Subtraction");
        return n1 - n2;}
      case 'Multiplication':
        return n1 * n2;
      case 'Division':
        return n2 !== 0 ? (n1 / n2).toFixed(2) : 'Cannot divide by zero';
      default:
        return 'Invalid operation';
    }
  };

  return (
    <div>
      <h2>Operation: {operation}</h2>
      <p><h3>Result: {calculate()}</h3></p>
    </div>
  );
};

export default OperationCalculator;

