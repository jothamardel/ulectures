import React from "react";
import { Link } from "react-router-dom";
import Star from "../../Assets/Rating.png";
import "./card.styles.scss";

const Card = ({ name, dept, id }) => (
  <div className="card">
    <div className="card-img">
      <img src="" alt="" />
    </div>
    <div className="card-details">
      <h3>{name}</h3>
      <p>{dept}</p>
      <div className="star-icon">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <div className="card-buttons">
        <Link to={`/lecturer/${id}`}>About</Link>
        <Link to="/course">Go to course</Link>
      </div>
    </div>
  </div>
);

export default Card;
