import React from "react";
import "./SkillCard.css";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiFlask } from "react-icons/si";

function SkillCardBackend() {
  return (
    <div className="skills-card">
      <div className="skill-heading">Backend</div>
      <div className="skills-card-content">
        <div className="skill">
          <FaPython />
          <div className="skill-name">Python</div>
        </div>
        <div className="skill">
          <FaNodeJs />
          <div className="skill-name">NodeJs</div>
        </div>
        <div className="skill">
          <TbApi />
          <div className="skill-name">REST</div>
        </div>
        <div className="skill">
          <BiLogoPostgresql />
          <div className="skill-name">PostgresSQL</div>
        </div>
        <div className="skill">
          <SiMysql />
          <div className="skill-name">MySQL</div>
        </div>
        <div className="skill">
          <BiLogoMongodb />
          <div className="skill-name">MongoDB</div>
        </div>
        <div className="skill">
          <IoLogoFirebase />
          <div className="skill-name">Firebase</div>
        </div>
        <div className="skill">
          <FaJava />
          <div className="skill-name">Java</div>
        </div>
        <div className="skill">
          <SiFlask />
          <div className="skill-name">Flask</div>
        </div>
        <div className="skill">
          <GrGraphQl />
          <div className="skill-name">Graph QL</div>
        </div>
      </div>
    </div>
  );
}

export default SkillCardBackend;