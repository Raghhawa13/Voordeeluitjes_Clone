import React from "react";
import { FaHeart } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import "./topheader.css";
const TopHeader = () => {
  return (
    <div className="mainContainer">
      <ul>
        <li>
          <div>
            <FaHeart />
            <span>92% of customers recommend Voordeeluitjes</span>
          </div>
        </li>
        <li>
          <div>
            <RxCountdownTimer />
            <span> Don't worry: pay later!</span>
          </div>
        </li>
        <li>
          <div>
            <IoCheckmarkDoneSharp />
            <span>Unique & affordable packages</span>
          </div>
        </li>

        <li>
          <div>
            <MdStars />
            <span>The specialist for more than 15 years</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
