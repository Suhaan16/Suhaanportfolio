import React from "react";
import "./SkillCard.css";

import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiCircleci } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiYaml } from "react-icons/si";

function SkillCardDevops() {
  return (
    <div className="skills-card">
      <div className="skill-heading">DevOps</div>
      <div className="skills-card-content">
        <div className="skill">
          <FaAws />
          <div className="skill-name">AWS</div>
        </div>
        <div className="skill">
          <FaDocker />
          <div className="skill-name">Docker</div>
        </div>
        <div className="skill">
          <SiKubernetes />
          <div className="skill-name">Kubernetes</div>
        </div>
        <div className="skill">
          <FaLinux />
          <div className="skill-name">Linux</div>
        </div>
        <div className="skill">
          <SiYaml />
          <div className="skill-name">YAML</div>
        </div>
        <div className="skill">
          <SiCircleci />
          <div className="skill-name">Circle CI</div>
        </div>
        <div className="skill">
          <div className="skill-name">GO</div>
        </div>
      </div>
    </div>
  );
}

export default SkillCardDevops;
