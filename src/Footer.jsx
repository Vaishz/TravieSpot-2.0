import React from "react";
import "./Footer.css";
import { FaSquareXTwitter, FaInstagram, FaGithub,FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import LogoR from './assets/Images/LogoR.png'

const Footer = () => {
  return (
    <>
      <div className="outer-main">
        <div className="main">
          <div className="flogo">
            <img src={LogoR} className="flogo" />
          </div>
          <div className="box">
            <ul>
              <div className="fhead"><span>Home</span></div>
              <li>places</li>
              <li>Random</li>
              <li>Know</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <div className="fhead"><span>Services</span></div>
              <li>Shop</li>
              <li>Flights</li>
              <li>Trains</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <div className="fhead"><span>Contact Us</span></div>
              <li>Cart</li>
              <li>Log in</li>
              <li>Sign up</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <div className="fhead"><span>About Us</span></div>
              <li>FAQ</li>
              <li>Review</li>
              <li>Certificate</li>
            </ul>
          </div>
        </div>

        <div className="ficons">
          <a href="https://github.com/"><FaGithub /></a>
          <a href="https://twitter.com/"><FaSquareXTwitter /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        </div>

        <div id="copy">
          <p>© Copyright since 2024</p>
        </div>
      </div>

    </>
  );
};

export default Footer;
