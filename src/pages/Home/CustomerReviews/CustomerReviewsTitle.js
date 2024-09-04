import React from "react";
import SectionButton1 from "../../../components/Button/SectionButton1";
import "./custom-swiper.css";

const CustomerReviewsTitle = () => {
  return (
    <div className="rewCusTitle">
      <div className="rewCusTitleLeft">
        <SectionButton1 title="Lorem Ipsum" />
      </div>
      <div className="rewCusTitleRight">
        Lorem ipsum dolor sit
        <br /> amet dolo <span>lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default CustomerReviewsTitle;
