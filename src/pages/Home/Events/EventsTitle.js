import React from "react";
import SectionButton1 from "../../../components/Button/SectionButton1";
import "./events.css";

const EventsTitle = () => {
  return (
    <div className="eventsTitle">
      <div className="eventsTitleLeft">
        <SectionButton1 title="Lorem Ipsum" />
      </div>
      <div className="eventsTitleRight">
        Lorem ipsum dolor <span>lorem ipsum dolor sit amet, consectetuer</span>
      </div>
    </div>
  );
};

export default EventsTitle;
