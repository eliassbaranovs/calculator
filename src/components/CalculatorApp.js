import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./CalculatorApp.css";

const CalculatorApp = () => {
  // State to store the input, result, operator, and buffer
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(null);
  const [buffer, setBuffer] = useState("");

  const handleButtonClick = (value) => {
    // Handle Clear
    if (value === "C") {
      setInput("");
      setResult(0);
      setOperator(null);
      setBuffer("");
      return;
    }

    // Handle Equals
    if (value === "=") {
      if (operator && buffer) {
        const calculation = evaluateResult();
        setResult(calculation);
        setInput("");
        setOperator(null);
        setBuffer(calculation);
      }
      return;
    }

    // Handle Operators
    if (["+", "-", "*", "/"].includes(value)) {
      if (input) {
        setResult(parseFloat(input)); // Show the current input as the result
        setBuffer(input);
        setInput("");
      }
      setOperator(value);
      return;
    }

    // Handle Numbers
    setInput((prev) => prev + value);
  };

  const evaluateResult = () => {
    const current = parseFloat(input);
    const prev = parseFloat(buffer);

    switch (operator) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return current !== 0 ? prev / current : "Cannot divide by zero";
      default:
        return current;
    }
  };

  return (
    <div className="calculator-app">
      <Display input={input} result={result} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default CalculatorApp;
