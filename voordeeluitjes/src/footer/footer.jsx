import React from "react";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import AllCompanies from "./allCompanies/allCompanies";
import SocialMedia from "./SocialMedia/SocialMedia";
import LastFooter from "./lastfooter/lastFooter";

const Footer = () => {
  return (
    <div>
      <FooterNavigation />
      <AllCompanies />
      <SocialMedia />
      <LastFooter />
    </div>
  );
};

export default Footer;
