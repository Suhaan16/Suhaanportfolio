import React, { useState } from "react";
import secretAudio from "../../assets/secret_sound.mp3";
import MyIntro from "./MyIntro";
import "./Intro.css";

export default function Intro({ openSes, setOpenSes }) {
  // const [openSes, setOpenSes] = useState(false);

  const openSesame = () => {
    setTimeout(() => {
      setOpenSes(!openSes);
    }, 500);
    document.querySelector(".secret-audio").play();
  };

  let beforeText = !openSes && (
    <p className="dark-text">
      Hey, Pss. Its dark. Why dont you turn on the{" "}
      <strong className="light-text" onClick={openSesame}>
        light?
      </strong>
    </p>
  );

  return (
    <section className="intro-container">
      <audio className="secret-audio" src={secretAudio} />

      <div className="intro-left">
        {beforeText}
        {openSes && <MyIntro />}
      </div>
      <div
        className={`${
          openSes ? "intro-right-active" : "intro-right-hidden"
        } float`}
      >
        <img
          src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/pose_46.png"
          alt=""
          draggable={false}
        />
      </div>
    </section>
  );
}
