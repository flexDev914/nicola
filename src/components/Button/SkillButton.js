import React from "react";
import "./button.css";

const SkillButton = (props) => {
  return (
    <button
      style={{
        padding: `${props.number === 0 ? "10px 25px 10px 25px" : "10px"}`,
      }}
      className="skillbutton"
    >
      {props.title}
    </button>
  );
};

export default SkillButton;
