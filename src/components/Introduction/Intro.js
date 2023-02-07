import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro-container">
      <div className="intro-left">Hello</div>
      <div className="intro-middle">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/light-bulb-5199556-4347716.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="intro-right">
        <img
          src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/pose_46.png"
          alt=""
        />
      </div>
    </section>
  );
}
