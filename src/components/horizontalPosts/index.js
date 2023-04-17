import React from "react";
import ImageInfo from "../imageInfo";
import MainTitle from "../mainTitle";
import Paragraph from "../paragraph";
import SubTitle from "../subTitle";
import Image from "../../assets/images/food.jpg";
import "./index.css";
const HorizontalPosts = () => {
  return (
    <div className="horizontalPostsContainer">
      <div class="article-recent-secondary">
        <img src={Image} />
        <ImageInfo />
      </div>
      <div class="article-recent-main">
        <MainTitle />
        <Paragraph /> <SubTitle />
      </div>
    </div>
  );
};

export default HorizontalPosts;
