import React from "react";
import "./Card.css";

export default function Card({ title, desc }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="projName">{title}</h1>
        <div className="tech-used">
          <div className="tech">
            <div className="tech-heading">Tech</div>
          </div>
          <div className="tech">
            <div className="tech-heading">Tech</div>
          </div>
          <div className="tech">
            <div className="tech-heading">Tech</div>
          </div>
          <div className="tech">
            <div className="tech-heading">Tech</div>
          </div>
          <div className="tech">
            <div className="tech-heading">Tech</div>
          </div>
        </div>
        <div className="proj-desc">{desc}</div>
      </div>
    </div>
  );
}
