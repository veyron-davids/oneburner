import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { ReactComponent as Logo } from "../assets/log.svg";
import HeaderComp from "./headerComp";

const Header = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="left-nav">
        <span onMouseEnter={handleClick} onMouseLeave={handleClick}>
          Product
          <BiChevronDown className="icon=head" />
        </span>
        <span>Pricing</span>
        <span>Enterprise</span>
        <span>Support</span>
      </div>
      <div className="right-nav">
        <span>Contact Sales</span>
        <span>Login</span>
        <button className="header-button">
          Try for Free <BiChevronRight />
        </button>
        {active ? null : <HeaderComp />}
      </div>
    </div>
  );
};

export default Header;
