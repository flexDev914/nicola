import React from "react";
import "./button.css";

const HeaderBtn = (props) => {
  const { title, padding } = props;
  return (
    <button className="headerBtn" style={{ padding }}>
      {title}
    </button>
  );
};

export default HeaderBtn;
