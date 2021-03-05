import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { ReactComponent as Logo } from "../assets/log.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-one">
          <Logo className="footer-logo" />
          <div className="footer-one-list">
            <h4>No 1 CRM solution in Africa</h4>
            <p>Terms of use | privacy policy</p>
          </div>
          <div className="footer-one-space">
            <p>Get in touch</p>
            <h4>+234-80-000-0000</h4>
            <div className="footer-icons">
              <AiFillFacebook />
              <AiFillTwitterSquare className="icon-spacing" />
              <AiFillLinkedin className="icon-spacing" />
              <IoLogoYoutube className="icon-spacing" />
            </div>
          </div>
        </div>

        <div className="footer-two-list">
          <div className="language">
            <GiWorld className="language-icon" />
            <p>English</p>
            <BiChevronDown className="arrow" />
          </div>
          <div className="footer-list-container">
            <div className="footer-list">
              <ul>Product</ul>
              <ul>Features</ul>
              <ul>Enterprise</ul>
              <ul>Scurity</ul>
              <ul>Trust</ul>
              <ul>Customer Stories</ul>
              <ul>Pricing</ul>
              <ul>Integration</ul>
              <ul>Onburner Partners</ul>
            </div>
            <div className="footer-list" id="">
              <ul>About Us</ul>
              <ul>Contact Us</ul>
              <ul>Careers</ul>
              <ul>In the News</ul>
            </div>
            <div className="footer-list">
              <ul>Oneburner for teams</ul>
              <ul>Engineering</ul>
              <ul>Financial Services</ul>
              <ul>CRM and Sales</ul>
              <ul>IT</ul>
              <ul>Marketing</ul>
              <ul>Customer Suppoort</ul>
              <ul>Human Resources</ul>
              <ul>Project Management</ul>
              <ul>Remote Work</ul>
            </div>
            <div className="footer-list">
              <ul>Resources</ul>
              <ul>Community</ul>
              <ul>Guides</ul>
              <ul>Templates</ul>
              <ul>Video Tutorials</ul>
              <ul>Professional Services</ul>
              <ul>Knowledge Base</ul>
              <ul>Webinars</ul>
              <ul>Find a Partner</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2020 Oneburner.com | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
