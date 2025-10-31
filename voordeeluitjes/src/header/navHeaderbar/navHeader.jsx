import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./navHeader.css";
const NavHeader = () => {
  return (
    <nav className="nav-header">
      {/* Left section */}
      <div className="nav-section nav-left">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Top Destinations
            </a>
            <IoMdArrowDropdown className="nav-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Offers
            </a>
            <IoMdArrowDropdown className="nav-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Thema's
            </a>
            <IoMdArrowDropdown className="nav-icon" />
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div className="nav-section nav-right">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>
            <IoMdArrowDropdown className="nav-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Customer Service
            </a>
            <IoMdArrowDropdown className="nav-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
