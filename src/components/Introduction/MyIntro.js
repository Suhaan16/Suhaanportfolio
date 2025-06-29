import React from "react";
import "./MyIntro.css";
import {ReactTyped} from "react-typed";

function MyIntro() {
//  const openResumeHandler = () => {
  //  window.open(
    //  "https://drive.google.com/file/d/1LBESj2QP20t7CL8R-Eg4U1-kQBW4x02P/view?usp=drive_link",
      //"_blank"
    //);
 // };

  return (
    <div className="myinrto-container">
      <h1 className="myintro-text">
        Hello, I'm <span className="magic">Suhaan Yagati Mat</span>.
      </h1>
      <h2 className="myintro-text">
      <div>
      <span>
        <ReactTyped
          strings={[
            "Full Stack Engineer",
            "Machine Learning Engineer",
            "Software Developer",
          ]}
          typeSpeed={80}
          backDelay={1100}
          backSpeed={30}
          loop
        />
      </span>
    </div>
        </h2>
      <p className=" myintro-text myintro-con">
      💻 I specialize in crafting end-to-end solutions with Python, Java and AWS, and have a strong track record in full-stack development,
      DevOps, and scalable system design. I’ve worked with, spanning web development, cloud services, and intelligent systems. 
      I thrive on challenges, adapt fast, and I'm geared up to innovate and learn. Welcome to my portfolio.{" "}

      </p>
      {/* <h3>A cutting-edge software engineer currently at <a href="https://www.veryableops.com/">Veryable Inc.</a>, passionately delving into the realms of scalability, cloud infrastructure, streamlined pipelines, and agile configurations.</h3> */}
     {/* <button className="fancyButton" onClick={openResumeHandler}> 
        <span className="magic">Resume</span>
      </button> */}
    </div>
  );
}

export default MyIntro;