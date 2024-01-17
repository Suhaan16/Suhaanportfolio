import React from "react";
import secretAudio from "../../assets/secret_sound.mp3";
import MyIntro from "./MyIntro";
import "./Intro.css";

export default function Intro() {
  // const [openSes, setOpenSes] = useState(false);

  return (
    <section className="intro-container" id="about">
      <audio className="secret-audio" src={secretAudio} />

      <div className="intro-left">
        <MyIntro />
      </div>
      <div className={`intro-right-active float`}>
        <img
          src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/pose_46.png"
          alt=""
          draggable={false}
        />
      </div>
    </section>
  );
}
