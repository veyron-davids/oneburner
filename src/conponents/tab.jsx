import React from "react";
import Video from "../assets/video.png";

const Tab = () => {
  return (
    <div className="tab">
      <div className="tab-nav">
        <span className="tab-link-active">CRM & Sales</span>
        <span>Human Resources</span>
        <span>Marketing</span>
        <span>Remote Work</span>
        <span>Project Management</span>
        <span>Social Media</span>
      </div>
      <div className="tab-description">
        <div className="tab-details">
          <h2>
            Management team activities <br /> all in one Place
          </h2>
          <p>
            Keep your team organized and inform and with activities <br /> that
            are upto date
          </p>
        </div>
        <div className="tab-video">
          <img src={Video} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Tab;
