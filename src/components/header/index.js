import React from "react";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";
import "./index.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="limiterWidth">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
