import React from "react";
import NavItem from "./navItem";
import "./index.css";
const Navigation = () => {
  return (
    <nav>
      <ul>
        {[1, 2, 3].map((item , index) => (
          <NavItem key= {index}/>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
