import React from "react";
import "./Card.css";

function TechHolder({ tech }) {
  return (
    <div className="tech">
      <div className="tech-heading">{tech}</div>
    </div>
  );
}

export default TechHolder;
