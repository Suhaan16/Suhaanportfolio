import React from "react";
import "./Navbar.css";
import logoWhite from "../../assets/chethan-logo-white.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div>
        <img className="nav-logo" src={logoWhite} alt="logo-white" />
      </div>
      <div className="nav-links">
        <a href="http://" rel="noopener noreferrer">
          About
        </a>
        <a href="http://" rel="noopener noreferrer">
          Work
        </a>
        <a href="http://" rel="noopener noreferrer">
          Servcies
        </a>
        <a href="http://" rel="noopener noreferrer">
          Contact
        </a>
      </div>
    </div>
  );
}
