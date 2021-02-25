import React from "react";
import "./player.scss";

const Player = (props) => (
  <div className="player">
    <video width="400" controls>
      <source
        src="https://res.cloudinary.com/daqj8bnrb/video/upload/v1614259725/video_egzjv2.mp4"
        type="video/mp4"
      />
    </video>
  </div>
);

export default Player;
