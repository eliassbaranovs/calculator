import React from "react";
import "./Display.css";

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="display-input">{input || "0"}</div>
      <div className="display-result">{result}</div>
    </div>
  );
};

export default Display;
