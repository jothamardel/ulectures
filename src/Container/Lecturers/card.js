import React from "react";
import "./card.scss";
import Star from "../../Assets/Rating.png";

const Card = ({}) => (
  <div className="card-container">
    <div className="card">
      <div className="card-img">
        <img src="" />
      </div>
      <div className="card-details">
        <h3>Prof. Lukeman Job</h3>
        <p>Department</p>
        <div className="star-icon">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
        <div className="card-buttons">
          <button>About</button>
          <button>Go to course</button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
