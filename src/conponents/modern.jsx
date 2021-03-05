import React from "react";
import B from "../assets/b.png";
import A from "../assets/a.png";
import { BiChevronRight } from "react-icons/bi";

const Modern = () => {
  return (
    <div className="modern">
          <div className="modern-container">
              <h1>Modern solution built for you <br /> enterprise growth</h1>
              <p>Centralize your team in a secure, flexible, and managed platform</p>
              <button>Request a demo <BiChevronRight/></button>
      </div>
      <div className="breaker"></div>
      <div className="second-circle-one"></div>
      <div className="second-card-one">
        <p>
          I've uploaded the <br />
          financial report
        </p>
      </div>
      <img src={B} id="second-img-one" alt="" />
      <div className="second-circle-two"></div>
      <div className="second-card-two">
        <p>
          Good Adeola, i will <br />
          check it out
        </p>
      </div>
      <img src={A} id="second-img-two" alt="" />
    </div>
  );
};

export default Modern;
