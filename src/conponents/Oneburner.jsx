import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ReactComponent as Badge } from "../assets/gold.svg";

const Oneburner = () => {
  return (
    <div className="oneburner">
      <div className="oneburner-title">
        <h3>How oneburner help enterprises grow</h3>
      </div>
      <div className="oneburner-flex">
        <div className="oneburner-one">
          <p>
            Oneburner software solution helps your business by creating an
            enabling environment <br />
            for easy communication and feedbacks in real time. Oneburner brings
            all your user <br />
            and teams in a single place with 99.99% uptime SLA and Data security
          </p>
        </div>
        <div className="oneburner-two">
          <ul>
            {" "}
            <IoMdCheckmarkCircleOutline className="burner-icon" />
            Data protection and control
          </ul>
          <ul>
            <IoMdCheckmarkCircleOutline className="burner-icon" />
            Reporting and analytics
          </ul>
          <ul>
            <IoMdCheckmarkCircleOutline className="burner-icon" />
            Use single sign-on and multi-factor authentication to secure
            accounts
          </ul>
          <ul>
            <IoMdCheckmarkCircleOutline className="burner-icon" />
            Enterprise integration with other tools
          </ul>
          <div className="badge">
                      <Badge className="badge-icon" />
                      <div className="badge-title" >
                          <h3>Best Collaboration Software</h3>
                          <p>Africa tech collition awards 2020</p>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oneburner;
