import React from "react";
import "./MyIntro.css";

function MyIntro() {

  const openResumeHandler = () => {
    window.open('https://drive.google.com/file/d/1joZuaRM6V1pWxYdwqVEaDQty7DfTZaQI/view', '_blank');
  }

  return (
    <div className="myinrto-container">
      <h1 className="myintro-text">
        Hey, I'm <span className="magic">Chethan</span>!
      </h1>
      <h3>A cutting-edge software engineer currently at <a href="https://www.veryableops.com/">Veryable Inc.</a>, passionately delving into the realms of scalability, cloud infrastructure, streamlined pipelines, and agile configurations.</h3>
      <button className="fancyButton" onClick={openResumeHandler}>
        Checkout my resume here
      </button>
    </div>
  );
}

export default MyIntro;
