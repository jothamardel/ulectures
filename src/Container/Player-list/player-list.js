import React from "react";
import "./player-list.scss";
import View from "../../assets/views.png";

const PlayerList = (props) => (
  <div className="player-w-container">
    <div className="views">
      <img src={View} alt="" />
      <p>20 views</p>
    </div>
    <div className="player-list-container">
      <div className="player-list">
        <div className="player-list-button">
          <button>Introduction</button>
        </div>
        <div className="player-list-button">
          <button>Introduction</button>
        </div>
        <div className="player-list-button">
          <button>Introduction</button>
        </div>
        <div className="player-list-button">
          <button>Introduction</button>
        </div>
      </div>
    </div>
  </div>
);

export default PlayerList;
