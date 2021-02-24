import React from "react";
import "./topMenu.scss";
import Search from "../../Assets/search.png";
import User from "../../Assets/user.png";
import Logo from "../../Assets/logo.png";

function Menu() {
  return (
    <div className="menu">
      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Logo-Pix" />
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
    </div>
  );
}

export default Menu;
