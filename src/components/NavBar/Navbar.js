import React from "react";
import "./Navbar.css";
import logoWhite from "../../assets/chethan-logo-white.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div>
        <img className="nav-logo link" src={logoWhite} alt="logo-white" />
      </div>
      <div className="nav-links">
        <a className="sec link" href="http://" rel="noopener noreferrer">
          About
        </a>
        <a className="sec link" href="http://" rel="noopener noreferrer">
          Work
        </a>
        <a className="sec link" href="http://" rel="noopener noreferrer">
          Servcies
        </a>
        <a className="sec link" href="http://" rel="noopener noreferrer">
          Contact
        </a>
      </div>
    </div>
  );
}
