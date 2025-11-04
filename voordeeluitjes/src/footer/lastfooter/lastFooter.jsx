import React from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import "./lastFooter.css";

const LastFooter = () => {
  return (
    <div className="lastFooter-main-container">
      <div className="company-img">
        <img src="./company.png" alt="componany logo" />
      </div>
      <div className="terms-privacy-conatiner">
        <div className="terms-condition ">
          <a href="" className="terms-list-itm">
            <span>General terms and conditions</span>
          </a>
        </div>
        <PiLineVerticalThin className="terms-icon" />
        <div className="terms-privacy ">
          <a href="" className="terms-list-itm">
            <span>Privacy</span>
          </a>
        </div>
        <PiLineVerticalThin className="terms-icon" />
        <div className="terms-cookies ">
          <a href="" className="terms-list-itm">
            <span>Cookies</span>
          </a>
        </div>
        <PiLineVerticalThin className="terms-icon" />
        <div className="terms-sitemap ">
          <a href="" className="terms-list-itm">
            <span>Sitemap</span>
          </a>
        </div>
        <PiLineVerticalThin className="terms-icon" />
        <div className="terms-cousomer-service ">
          <a href="" className="terms-list-itm">
            <span>Customer service</span>
          </a>
        </div>
      </div>
      <div className="company-knows">
        <h4>Voordeeluitjes.nl is known for</h4>
      </div>
      <div className="all-logo-list">
        <ul className="last-companies-logos">
          <li className="li-logoe">
            <span className="logo-avro"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-kro"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-max2"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-mikro"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-ncrv"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-npo"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-televizier"></span>
          </li>
          <li className="li-logoe">
            <span className="logo-tros"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LastFooter;
