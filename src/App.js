import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/NavBar/Navbar";

function App() {
  useEffect(() => {
    let links = Array.from(document.querySelectorAll(".link"));
    let cursor = document.querySelector(".cursor");
    let trailer = document.querySelector(".trailer");

    console.log(cursor);

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
  }, []);

  // const openOld = () => {
  //   window.open(
  //     "https://chethan30.github.io/my-portfolio.github.io/",
  //     "_blank"
  //   );
  // };

  return (
    <div className="App">
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
        <Intro />
        <div className="card-container">
          <Card className="card-ele" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="footer-holder">
          <Footer />
        </div>
      </div>

      <div className="cursor"></div>
      <div className="trailer"></div>
    </div>
  );
}

export default App;
