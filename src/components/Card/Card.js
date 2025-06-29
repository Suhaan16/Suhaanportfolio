import React from "react";
import "./Card.css";
import TechHolder from "./TechHolder";

export default function Card({
  itemId,
  title,
  desc,
  techStack,
  projectInfo,
  openPage,
  setActiveProj,
}) {
  const openWork = () => {
    console.log("Clicked on" + title);
    setActiveProj(projectInfo);
    openPage(true);
  };
  return (
    <div className="card" onClick={openWork}>
      <div className="card-content">
        <h1 className="projName">{title}</h1>
        <div className="tech-used">
          {techStack.map((tech, index) => {
            return <TechHolder tech={tech} key={index} />;
          })}
        </div>
        <div className="proj-desc">{desc}</div>
      </div>
    </div>
  );
}