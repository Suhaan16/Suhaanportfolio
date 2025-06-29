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
        <a href="https://github.com/Suhaan16" className="link social">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/suhaan/"
          className="link social"
        >
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/Suhaan_16/" className="link social">
          <SiLeetcode />{" "}
        </a>
        <a href="mailto:suhaanym1601@gmail.com" className="link social">
          <MdEmail />
        </a>
        <a href="https://x.com/SuhaanYm" className="link social">
          <FaXTwitter />
        </a>
      </div>
      <div className="copywrite">
        © Made with <span className="copyheart">❤️</span> by Suhaan Yagati Mat
      </div>
    </div>
  );
}