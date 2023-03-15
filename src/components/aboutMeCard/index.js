import React from "react";
import Image from "../../assets/images/about-me.jpg";
import Paragraph from "./../paragraph/index";
import "./index.css";
import CardsTitle from "../cardsTitle";
const AboutMe = () => {
  return (
    <div className="aboutMeCard">
      <CardsTitle />
      <img src={Image} alt="myPhoto" class="widget-image" />
      <Paragraph />
    </div>
  );
};

export default AboutMe;
