import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-container">
      <div className="social-wrapper">
        <div className="feedback-box">
          <div className="customer-feedback">
            <div className="feedback-text">
              <h6>92% of customers recommend us</h6>
            </div>
            <div className="review-count">
              <span>Over 100,000 reviews.</span>
            </div>
          </div>
          <div className="rating-section">
            <div className="rating-stars">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar className="star-5" />
              </div>
              <span className="rating-score">8.2</span>
            </div>

            <div className="review-source">
              <div className="kiyoh">
                <img src="./Kiyoh1.png" alt="" className="img-kiyoh" />
              </div>
              <div className="feedback-company">
                <img src="./logo.svg" alt="" className="img-feedback-company" />
              </div>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h4>Social media</h4>
          <span>Great offers and inspiration.</span>
          <div className="social-icons">
            <a href="">
              <FaFacebookF className="all-icon" />
            </a>
            <a href="">
              <FaInstagram className="all-icon" />
            </a>
            <a href="">
              <FaPinterestP className="all-icon" />
            </a>
            <a href="">
              <SiBloglovin className="all-icon" />
            </a>
            <a href="">
              <FaYoutube className="all-icon" />
            </a>
          </div>
        </div>

        <div className="top-deal-section">
          <h4>Never miss a top deal again!</h4>
          <div className="deal-text">
            <span>
              Get <b>a €5.00 discount</b> and take advantage of exclusive offers
              in our newsletter!
            </span>
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <div className="submit-box">
              <div className="submit-btn">
                <button>to enrol</button>
              </div>
              <div className="arrow-icon">
                <FaArrowRight className="arrow-icon-1" />
              </div>
            </div>
          </div>
          <div className="customers-already">
            <span>
              More than 2,000,000 customers have already gone before you!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
