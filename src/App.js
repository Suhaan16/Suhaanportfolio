import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/NavBar/Navbar";

function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [underMain, setUnderMain] = useState(false);

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  let links = Array.from(document.querySelectorAll(".link"));
  let cursor = document.querySelector(".cursor");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
    });
  });

  const openOld = () => {
    window.open(
      "https://chethan30.github.io/my-portfolio.github.io/",
      "_blank"
    );
  };

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
        <Card />
        <div className="footer-holder">
          <Footer />
        </div>
      </div>

      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </div>
  );
}

export default App;
