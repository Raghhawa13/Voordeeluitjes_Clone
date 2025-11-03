import React from "react";
import "./allcompanies.css";

const AllCompanies = () => {
  return (
    <div className="AllCompanies-container">
      <div className="AllCompanies-logoContainer">
        <div className="AllCompanies-brandWrapper">
          <ul className="AllCompanies-brandList">
            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className=" AllCompanies-logoImg VanDerValk"></span>
              </a>
            </li>

            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className="AllCompanies-logoImg BuilberBerg"></span>
              </a>
            </li>

            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className="AllCompanies-logoImg BestWestern"></span>
              </a>
            </li>

            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className="AllCompanies-logoImg NH-Hotel"></span>
              </a>
            </li>

            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className="AllCompanies-logoImg Postillion "></span>
              </a>
            </li>

            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className="AllCompanies-logoImg WestCord"></span>
              </a>
            </li>

            <li className="AllCompanies-logoItem">
              <a href="#" className="AllCompanies-logoLink">
                <span className="AllCompanies-logoImg Amrath"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCompanies;
