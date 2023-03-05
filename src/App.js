import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/NavBar/Navbar";
import secretAudio from "./assets/secret_sound_2.mp3";

function App() {
  const mouseFollower = (cursor, trailer) => {
    window.onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      console.log();

      cursor.animate(
        {
          top: `${y - cursor.clientWidth / 2}px`,
          left: `${x - cursor.clientWidth / 2}px`,
        },
        { duration: 800, fill: "forwards" }
      );
      trailer.animate(
        {
          top: `${y - trailer.clientWidth / 2}px`,
          left: `${x - trailer.clientWidth / 2}px`,
        },
        { duration: 1600, fill: "forwards" }
      );
    };
  };

  const mouseGlow = (links, cursor, trailer) => {
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("grow");
        trailer.classList.add("growmore");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        trailer.classList.remove("growmore");
      });
    });
  };
  useEffect(() => {
    let links = Array.from(document.querySelectorAll(".link"));
    let cursor = document.querySelector(".cursor");
    let trailer = document.querySelector(".trailer");
    let cards = document.querySelectorAll(".card");
    let logo = document.querySelector(".nav-logo");

    logo.addEventListener("mouseover", (e) => {
      console.log("over and out!");
      document.querySelector(".secret-audio2").play();
    });
    logo.addEventListener("mouseleave", (e) => {
      console.log("over and out!");
      document.querySelector(".secret-audio2").pause();
    });

    mouseFollower(cursor, trailer);
    mouseGlow(links, cursor, trailer);

    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        cursor.classList.add("point");
        trailer.classList.add("growmore");
      });
      card.addEventListener("mouseleave", () => {
        cursor.classList.remove("point");
        trailer.classList.remove("growmore");
      });
    });
  }, []);

  // const openOld = () => {
  //   window.open(
  //     "https://chethan30.github.io/my-portfolio.github.io/",
  //     "_blank"
  //   );
  // };

  return (
    <div className="App">
      <audio className="secret-audio2 growmore" src={secretAudio} />
      <div className="navbar">
        <Navbar />
      </div>

      {/* {underMain && (
        <div className="content">
          <div className="welcome">
            <h1 className="">We are Under Maintananace!</h1>
          </div>
          <h2 className="link" onClick={openOld}>
            Check my previous version here!
          </h2>
        </div>
      )} */}
      <div className="content2">
        {/* <---------- Introduction -----------> */}
        <Intro />

        {/* <---------- Projects -----------> */}
        <div className="card-container">
          <div className="heading">Projects</div>
          <div className="card-grid">
            <Card className="card-ele" />
          </div>
        </div>
        {/* <---------- Services/ Skills -----------> */}

        {/* <---------- Aboutme and Resume -----------> */}

        {/* <---------- Footer -----------> */}
        <div className="footer-holder">
          <Footer />
        </div>
      </div>

      <div className="cursor">
        <i className="cursor-icon">🚀</i>
      </div>
      <div className="trailer"></div>
    </div>
  );
}

export default App;
