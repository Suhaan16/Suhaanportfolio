import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer({ showNav }) {
  return (
    <div className="footer">
      {!showNav && (
        <div className="nav-again">
          <a className="link" href="#about">
            About
          </a>
          <a className="link" href="#experience">
            Experience
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#skills">
            Skills
          </a>
          {/* <a className="link" href="#contact">
            Contact
          </a> */}
        </div>
      )}

      <div className="social-handles">
        <a href="https://github.com/Chethan30" className="link social">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chethanbn/"
          className="link social"
        >
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/Chethan30/" className="link social">
          <SiLeetcode />{" "}
        </a>
        <a href="mailto:cxb220002@utdallas.edu" className="link social">
          <MdEmail />
        </a>
        <a href="https://twitter.com/chethanbn30" className="link social">
          <FaXTwitter />
        </a>
      </div>
      <div className="copywrite">
        © Made with <span className="copyheart">❤️</span> by Chethan Birur
        Nataraja
      </div>
    </div>
  );
}
