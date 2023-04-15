import React, { useEffect } from "react";
import "./Work.css";
import backButton from "../../assets/backButton.png";

function Work({ title }) {
  useEffect(() => {}, []);

  const bttonLink = "https://icons8.com/icon/99287/back-arrow";

  return (
    <div className="pageContainer">
      <div className="page-heading">
        <div className="back-button">
          <img src={backButton} alt="" />
        </div>
        <div className="page-title">{title}</div>
        <div className="page-links">Links to project here</div>
      </div>
      <div className="page-content">
        <div className="page-pictures">Pictures usign swipwe js</div>
        <div className="tech-used">
          <div className="tech">
            <div className="tech-heading">React</div>
          </div>
          <div className="tech">
            <div className="tech-heading">Python</div>
          </div>
          <div className="tech">
            <div className="tech-heading">HTML</div>
          </div>
          <div className="tech">
            <div className="tech-heading">CSS</div>
          </div>
        </div>
        <div className="page-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id eos
          distinctio iure optio at, exercitationem nostrum hic vitae quidem
          recusandae esse. Molestiae doloribus voluptate repellat distinctio
          consequuntur, totam quas. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Totam maxime saepe mollitia, neque quis blanditiis
          sint! Sed maxime ut consequatur cum eaque sit id voluptate quia! Illo,
          adipisci est voluptatibus doloribus dolores molestias vero rem ipsum
          inventore soluta ducimus sit asperiores repellendus error possimus
          voluptas placeat quas quasi ex magni illum in, quidem labore! Labore
          commodi tenetur libero assumenda cum, placeat illo ratione molestias
          ab nisi ad voluptatibus quia numquam excepturi temporibus consequuntur
          accusamus adipisci rem sint aut nobis! Laboriosam, labore. Similique
          fugiat est eligendi omnis corporis necessitatibus delectus suscipit.
          Sapiente placeat, dolores necessitatibus iusto voluptatum laudantium
          sint nostrum adipisci!
        </div>
      </div>
    </div>
  );
}

export default Work;
