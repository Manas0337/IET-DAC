export default function Calculator(props) {
  const n1 = parseFloat(props.num1);
  const n2 = parseFloat(props.num2);

  function Addition() {
    return n1 + n2;
  }

  function Subtraction() {
    return n1 - n2;
  }

  function Multiplication() {
    return n1 * n2;
  }

  function Division(){
    return n1/n2;
  }

  return (
    <>
      <p><h3>Calculator</h3></p>
      <h2>Addition is: {Addition()}</h2>
      <h2>Multiplication is: {Multiplication()}</h2>
      <h2>Subtraction is: {Subtraction()}</h2>
      <h2>Division is: {Division()}</h2>
    </>
  );
}

