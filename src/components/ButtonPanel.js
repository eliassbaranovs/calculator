import React from "react";
import Button from "./Button";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";
import "./ButtonPanel.css";

const ButtonPanel = ({ onButtonClick }) => {
  return (
    <div className="button-panel">
      {/* Number buttons */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
        <Button key={number} label={number} onClick={onButtonClick} />
      ))}

      {/* Operation buttons */}
      <Button label={<FaPlus />} onClick={() => onButtonClick("+")} />
      <Button label={<FaMinus />} onClick={() => onButtonClick("-")} />
      <Button label={<FaTimes />} onClick={() => onButtonClick("*")} />
      <Button label={<FaDivide />} onClick={() => onButtonClick("/")} />
      <Button label={<FaEquals />} onClick={() => onButtonClick("=")} />

      {/* Clear button */}
      <Button label="C" onClick={() => onButtonClick("C")} />
    </div>
  );
};

export default ButtonPanel;
