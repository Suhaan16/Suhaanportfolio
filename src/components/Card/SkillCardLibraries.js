import React from "react";
import "./SkillCard.css";
import { SiScikitlearn, SiTensorflow, SiPytorch, SiVisualstudiocode } from "react-icons/si";

// Example with icons:
<div className="skill">
  <SiTensorflow />
  <div className="skill-name">TensorFlow</div>
</div>


function SkillCardLibraries() {
  return (
    <div className="skills-card">
      <div className="skill-heading">Libraries and Tools</div>
      <div className="skills-card-content">
        <div className="skill">
          <SiScikitlearn />
          <div className="skill-name">Scikit-Learn</div>
        </div>
        <div className="skill">
          <SiTensorflow />
          <div className="skill-name">TensorFlow</div>
        </div>
        <div className="skill">
          <SiPytorch />
          <div className="skill-name">PyTorch</div>
        </div>
        <div className="skill">
          <SiVisualstudiocode />
          <div className="skill-name">VS Code</div>
        </div>
      </div>
    </div>
  );
}

export default SkillCardLibraries;