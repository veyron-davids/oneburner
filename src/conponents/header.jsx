import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { ReactComponent as Logo } from "../assets/log.svg";
import HeaderComp from "./headerComp";
import { Link} from "react-router-dom";

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
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#454545",
            paddingLeft: "20px",
          }}
        >
          <span>Pricing</span>
        </Link>
        <Link
          to="/SecondPage"
          style={{
            textDecoration: "none",
            color: "#454545",
            paddingLeft: "20px",
          }}
        >
          <span>Enterprise</span>
        </Link>
        <Link
          to="/thirdPage"
          style={{
            textDecoration: "none",
            color: "#454545",
            paddingLeft: "20px",
          }}
        >
          <span>Support</span>
        </Link>
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
