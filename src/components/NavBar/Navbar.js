import React from "react";
import "./Navbar.css";
import logoWhite from "../../assets/chethan-logo-white.png";

export default function Navbar({ showLinks }) {
  return (
    <div className="nav-container">
      <div>
        <img
          className="nav-logo link"
          src={logoWhite}
          alt="logo-white"
          draggable={false}
        />
      </div>

      {!showLinks && (
        <div className="nav-links">
          <a className="sec link" href="#about" rel="noopener noreferrer">
            About
          </a>
          <a className="sec link" href="#skills" rel="noopener noreferrer">
            Skills
          </a>
          <a className="sec link" href="#experience" rel="noopener noreferrer">
            Experience
          </a>
          <a className="sec link" href="#projects" rel="noopener noreferrer">
            Projects
          </a>
          {/* <a className="sec link" href="#contact" rel="noopener noreferrer">
            Contact
          </a> */}
        </div>
      )}
    </div>
  );
}
