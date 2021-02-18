import React from "react";
import "./topMenu.scss";
import Search from "../../assets/search.png";
import User from "../../assets/user.png";

function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <h1>
          {" "}
          u<span>Lesson</span>
        </h1>
      </div>
      <div className="Icons">
        <div className="searchIcon">
          <img src={Search} alt="search-icon" />
        </div>
        <div className="userIcon">
          <img src={User} alt="user-icon" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
