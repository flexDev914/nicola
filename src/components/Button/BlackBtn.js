import React from "react";
import "./button.css";

const BlackBtn = (props) => {
  const { title, goarrowupright, onClick } = props;

  return (
    <button className="blackBtn" onClick={onClick}>
      {title}&nbsp;{goarrowupright}
    </button>
  );
};

export default BlackBtn;
