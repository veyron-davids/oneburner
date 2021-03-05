import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { CgBrowser } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";
import Contact from "../assets/contact.png";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="icons">
        <HiOutlineChatAlt2 />
        <span>Live chat</span>
        <CgBrowser />
        <span>Mail support</span>
        <AiOutlinePhone />
        <span>Phone call support</span>
      </div>
      <div className="contact-picture">
        <img src={Contact} alt="img" />
      </div>
      <div className="contact-details">
        <h2>24/7 customer support</h2>
        <p>
          Our team of responsible member is always available to help you all day
          long
          <br /> and ready to meet your demand. Reach out to us and we will
          always be there.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
