import React from "react";
import Welcome from "./Welcome/Welcome";
import MyPublications from "./MyPublications/MyPublications";
import UserList from "./UserList/UserList";
import Publication from "./Publication/Publication";
import Email from "./Email/Email";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import ReviewHistory from "./ReviewHistory/ReviewHistory";
import Events from "./Events/Events";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Welcome />
        <MyPublications />
        <UserList />
        <Publication />
        <Email />
        <CustomerReviews />
      </div>
      <div className="reviewHistoryContainer">
        <ReviewHistory />
      </div>
      <div className="homeContainer">
        <Events />
      </div>
    </>
  );
};

export default Home;