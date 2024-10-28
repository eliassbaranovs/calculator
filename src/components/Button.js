import React from "react";
import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="calculator-button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
