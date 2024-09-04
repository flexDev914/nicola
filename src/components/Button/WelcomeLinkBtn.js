import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import "./button.css";

const WelcomeLinkBtn = (props) => {
  const { title } = props;
  return (
    <a href="#" className="welcomeLinkBtn">
      {title}
      <GoArrowUpRight style={{fontWeight: "800"}} />
    </a>
  );
};

export default WelcomeLinkBtn;
