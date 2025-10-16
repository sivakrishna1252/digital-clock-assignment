import React, { useState} from "react";
 
export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
 
  function calculate() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;
 
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operator";
    }
 
    setResult(res);
  }
 
  return (
    <div>
      <h2>Simple Calculator</h2>
 
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <br></br>
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="">Select</option>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <br></br>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br></br>
          <button onClick={calculate}>  Calculate</button>
 
      <h3>Result: {result}</h3>
    </div>
  );
}
 