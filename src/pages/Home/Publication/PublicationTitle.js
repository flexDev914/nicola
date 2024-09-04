import React from "react";
import SectionButton1 from "../../../components/Button/SectionButton1";
import "./publication.css";

const PublicationTitle = () => {
  return (
    <div className="publicationTitle1">
      <div className="pubTitleLeft1">
        <SectionButton1 title="Lorem ipsum" />
      </div>
      <div className="pubTitleRight1">
        Lorem <span>ipsum dolor sit amet</span> consectetuer
      </div>
    </div>
  );
};

export default PublicationTitle;
