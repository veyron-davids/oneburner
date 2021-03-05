import React from "react";
import first from "../assets/show-one.png";
import two from "../assets/show-two.png";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-one">
        <img src={first} alt="" />
        <div className="showcase-details">
          <h2>Bring your team up to speed</h2>
          <p>
            Collaborate on Projects from start to finish, see information at a{" "}
            <br />
            glance, add comment, attachment and more with oneburner
          </p>
        </div>
      </div>
      <div className="showcase-one">
        <div className="showcase-details">
          <h2>Automated task timeline</h2>
          <p>
            View dates, Projects, calender, sprint, and more with reliability
          </p>
        </div>
        <img src={two} alt="" />
      </div>
    </div>
  );
};

export default Showcase;
