import React from "react";
import SectionButton1 from "../../../components/Button/SectionButton1";

const UserListTitle = () => {
  return (
    <div className="userListTitle">
      <div className="userListTitleLeft">
        <SectionButton1 title="Lorem Ipsum" />
      </div>
      <div className="userListTitleRight">
        <span>Lorem ipsum dolor sit am</span> consectetuer adipiscing elit
        Aenean commodo
      </div>
    </div>
  );
};

export default UserListTitle;
