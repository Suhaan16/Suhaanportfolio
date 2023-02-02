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
        <div>About</div>
        <div>Work</div>
        <div>Servcies</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
