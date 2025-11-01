import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUs-container">
      <h2 className="WhyChooseUs-heading">
        Book your hotel deals and packages at a great price at
        Voordeeluitjes.nl!
      </h2>

      <div className="WhyChooseUs-content">
        <div className="WhyChooseUs-section">
          <h3 className="WhyChooseUs-subheading">Best Hotel Deals</h3>
          <p className="WhyChooseUs-description">
            You don't have to go far to get away from it all. Voordeeluitjes.nl
            offers over 1,300 charming hotels with great deals for a wonderful
            night, week, or weekend getaway. Besides hotels and holiday parks in
            the Netherlands, we also offer deals in Germany, Belgium,
            Luxembourg, and several other European countries. And we're adding
            more all the time! Whether you're looking for a rural destination, a
            seaside holiday, or a city hotel, you've come to the right place. We
            also have last-minute hotel deals! Go on a journey of discovery and
            check out our Voordeeluitjes.nl blog for inspiration!
            <div className="WhyChooseUs-Shadow-bootam"></div>
          </p>
        </div>

        <div className="WhyChooseUs-linkContainer">
          <a href="#" className="WhyChooseUs-link">
            Read more about Voordeeluitjes.nl
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
