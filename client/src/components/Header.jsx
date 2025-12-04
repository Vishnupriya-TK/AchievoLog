import React from "react";
import vcetLogo from "../assets/Vcet logo.jpeg"; 
import cseLogo from "../assets/CSE logo.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={vcetLogo} alt="VCET Logo" className="header-logo" />
      <div className="header-title">
        <h1>Velammal College of Engineering and Technology</h1>
        <p>Department of Computer Science and Engineering</p>
      </div>
      <img src={cseLogo} alt="CSE Logo" className="header-logo" />
    </div>
  );
};

export default Header;
