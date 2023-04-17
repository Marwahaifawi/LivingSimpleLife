import React from "react";
import MainTitle from "../../mainTitle";
import SubTitle from "../../subTitle";
import "./index.css";
const HeaderLeft = () => {
  return (
    <div className="headerLeftContainer">
      <div>
        <MainTitle />
        <SubTitle />
      </div>
    </div>
  );
};

export default HeaderLeft;
