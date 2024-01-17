import React from "react";
import "./SkillCard.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function SkillCardFrontend() {
  return (
    <div className="skills-card">
      <div className="skill-heading">Frontend</div>
      <div className="skills-card-content">
        <div className="skill">
          <FaReact />
          <div className="skill-name">React</div>
        </div>
        <div className="skill">
          <TbBrandNextjs />
          <div className="skill-name">Next</div>
        </div>
        <div className="skill">
          <IoLogoJavascript />
          <div className="skill-name">Javascript</div>
        </div>
        <div className="skill">
          <FaHtml5 />
          <div className="skill-name">HTML</div>
        </div>
        <div className="skill">
          <FaCss3Alt />
          <div className="skill-name">CSS</div>
        </div>
        <div className="skill">
          <SiTailwindcss />
          <div className="skill-name">Tailwind</div>
        </div>
        <div className="skill">
          <FaBootstrap />
          <div className="skill-name">Bootstrap</div>
        </div>
      </div>
    </div>
  );
}

export default SkillCardFrontend;
