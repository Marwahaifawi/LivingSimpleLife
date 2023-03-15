import React from "react";
import CardsTitle from "../cardsTitle";
import "./index.css";
import Image from "../../assets/images/deco.jpg";
import CardsParagraph from "../cardsParagraph";
const RecentPosts = () => {
  return (
    <div className="recentPostsContainer">
      <CardsTitle />
      {[1, 2, 3].map((item , index) => (
        <div key={index} class="widget-recent-post">
          <img src={Image} alt="food" class="widget-image" />
          <CardsParagraph />
        </div>
      ))}
    </div>
  );
};
export default RecentPosts;
