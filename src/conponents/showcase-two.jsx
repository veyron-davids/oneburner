import React from "react";
import three from "../assets/show-one.png";
import four from "../assets/show-two.png";

const ShowcaseTwo = () => {
  return (
    <div className="showcase" id="shwocase-two">
      <div className="showcase-one">
        <img src={three} alt="" />
        <div className="showcase-details">
          <h2>Timeles report generator</h2>
          <p>
            You can genrate quick report of activitiesof all that has to do{" "}
            <br />
            with the daily runnig of your business and teams.
          </p>
        </div>
      </div>
      <div className="showcase-one">
        <div className="showcase-details">
          <h2>Efficient Lead Management</h2>
          <p>
            Track and manage prospective customers. Manage their notes, emails,
            <br />
            meeting, calls, contact, and files
          </p>
        </div>
        <img src={four} alt="" />
      </div>
    </div>
  );
};

export default ShowcaseTwo;
