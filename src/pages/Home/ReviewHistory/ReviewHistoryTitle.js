import React from "react";
import SectionButton1 from "../../../components/Button/SectionButton1";
import "./reviewHistory.css";

const ReviewHistoryTitle = () => {
  return (
    <div className="rewHisTitle">
      <div className="rewHisTitleLeft">
        <SectionButton1 title="Lorem ipsum" />
      </div>
      <div className="rewHisTitleRight">
        Lorem ipsum dolor sit amet <br />
        <span>lorem ipsum dolor sit</span>
      </div>
    </div>
  );
};

export default ReviewHistoryTitle;
