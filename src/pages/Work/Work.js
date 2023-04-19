import React, { useEffect } from "react";
import "./Work.css";
import backButton from "../../assets/backButton.png";
import TechHolder from "../../components/Card/TechHolder";

function Work({ openPage, activeProj }) {
  useEffect(() => {
    console.log(activeProj);
  }, []);

  const bttonLink = "https://icons8.com/icon/99287/back-arrow";

  const closePage = () => {
    openPage(false);
  };

  return (
    <div className="pageContainer">
      <div className="page-heading">
        <div className="back-button" onClick={closePage}>
          <img src={backButton} alt="" />
        </div>
        <div className="page-title">{activeProj.title}</div>
        <div className="page-links">Links to project here</div>
      </div>

      <div className="page-content">
        <div className="page-pictures">Pictures using swiper js</div>
        <div className="tech-used">
          {activeProj.tech.map((tech, index) => {
            return <TechHolder tech={tech} key={index} />;
          })}
        </div>

        <div className="page-desc">{activeProj.description}</div>
      </div>
    </div>
  );
}

export default Work;
