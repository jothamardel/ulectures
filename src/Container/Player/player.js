import React from "react";
import "./player.scss";
import Video from "../../assets/video.mp4";

const Player = (props) => (
  <div className="player">
    <video width="400" controls>
      <source src={Video} type="video/mp4" />
    </video>
  </div>
);

export default Player;
