import React from "react";
import "./footer.scss";
import Home from "../../assets/home.png";

function Footer() {
  return (
    <div className="footerContent">
      <div className="body"></div>
      <div className="homeIcon">
        <img src={Home} alt="home-icon" />
        <img src={Home} alt="home-icon" />
        <img src={Home} alt="home-icon" />
        <img src={Home} alt="home-icon" />
      </div>
    </div>
  );
}

export default Footer;
