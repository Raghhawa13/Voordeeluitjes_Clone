import React from "react";

const FooterNavigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-row">
        <div className="navigation-col">
          <p className="navigation-title">
            <h5>Destinations</h5>
            <ul>
              <li>Achterhoek</li>
              <li>Sauerland</li>
              <li>Moselle</li>
              <li>The Netherlands</li>
              <li>Belgium</li>
              <li>Germany</li>
            </ul>
          </p>
        </div>
        <div className="navigation-col">
          <p className="navigation-title">
            <h5>Popular Cities</h5>
            <ul>
              <li>The Hague</li>
              <li>Bruges</li>
              <li>Utrecht</li>
              <li>Düsseldorf</li>
              <li>Cologne</li>
              <li>Amsterdam</li>
            </ul>
          </p>
        </div>
        <div className="navigation-col">
          <p className="navigation-title">
            <h5>Theme</h5>
            <ul>
              <li>Last minute deals</li>
              <li>Last minute Netherlands</li>
              <li>Night away</li>
              <li>Weekend away</li>
              <li>Weekend getaway Netherlands</li>
              <li>All Inclusive</li>
            </ul>
          </p>
        </div>
        <div className="navigation-col">
          <p className="navigation-title">
            <h5>About Voordeeluitjes.nl</h5>
            <ul>
              <li>Frequently Asked Questions</li>
              <li>Review Policy</li>
              <li>Collaboration with Air Miles</li>
              <li>General terms and conditions</li>
              <li>Cookie Statement</li>
              <li>Privacy Policy</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
