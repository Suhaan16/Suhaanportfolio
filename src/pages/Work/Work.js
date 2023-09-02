import React, { useEffect } from "react";
import "./Work.css";
import backButton from "../../assets/backButton.png";
import TechHolder from "../../components/Card/TechHolder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Work({ openPage, activeProj }) {
  useEffect(() => {
    // console.log(activeProj);
  }, []);

  // const bttonLink = "https://icons8.com/icon/99287/back-arrow";

  const closePage = () => {
    openPage(false);
  };

  return (
    <div className="pageContainer">
      <div className="page-heading">
        <div className="back-button linkhover" onClick={closePage}>
          <img src={backButton} alt="" />
        </div>
        <div className="page-title">{activeProj.title}</div>
        <div className="page-links">Links to project here</div>
      </div>

      <div className="page-content">
        <div className="tech-used">
          {activeProj.tech.map((tech, index) => {
            return <TechHolder tech={tech} key={index} />;
          })}
        </div>
        { activeProj.pictures && <div className="page-pictures">
          <Swiper navigation={true} modules={[Navigation]} className="swiper">
            <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
            <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
            <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
            <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
          </Swiper>
        </div>}
        

        <div className="page-desc">{activeProj.description}</div>
      </div>
    </div>
  );
}

export default Work;
