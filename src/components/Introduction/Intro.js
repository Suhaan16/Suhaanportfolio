import React, { useState } from "react";
import "./Intro.css";

export default function Intro() {
  const [openSes, setOpenSes] = useState(false);

  const openSesame = () => {
    setOpenSes(!openSes);
  };

  return (
    <section className="intro-container">
      <div className="intro-left">
        {!openSes && (
          <p className="dark-text">
            Hey, Pss. Its dark. Why dont you turn on the{" "}
            <strong className="light-text" onClick={openSesame}>
              light?
            </strong>
          </p>
        )}
        {openSes && <p>Hello</p>}
      </div>
      {/* <div className="intro-middle">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/light-bulb-5199556-4347716.png"
          alt=""
          srcset=""
        />
      </div> */}
      <div
        className={`${
          openSes ? "intro-right-active" : "intro-right-hidden"
        } float`}
      >
        <img
          src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/pose_46.png"
          alt=""
        />
      </div>
    </section>
  );
}
