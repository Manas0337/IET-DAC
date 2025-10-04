import React, { useState, useEffect } from 'react';

const Factorial = ({ number }) => {
  const [result, setResult] = useState(null);

  const calculateFactorial = (num) => {
    if (num < 0) return 'Invalid input';
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  };

  useEffect(() => {
    setResult(calculateFactorial(number));
  }, [number]);

  return (
    <div>
      <h3>Factorial of {number} is: {result}</h3>
    </div>
  );
};

export default Factorial; 
