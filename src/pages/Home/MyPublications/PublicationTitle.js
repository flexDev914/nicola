import React from "react";
import SectionButton from "../../../components/Button/SectionButton";
import "./my-publications.css";

const PublicationTitle = () => {
  return (
    <div className="publicationTitle">
      <div className="pubTitleLeft">
        <SectionButton title="Lorem ipsum dolor" />
      </div>
      <div className="pubTitleRight">
        Lorem ipsum dolor sit amet lorem <span>lorem ipsum dolor sit am</span>{" "}
        lorem ipsu Lorem ipsum dolor sit amet lorem
      </div>
    </div>
  );
};

export default PublicationTitle;
