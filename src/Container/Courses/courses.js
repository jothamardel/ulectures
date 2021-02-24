import React from "react";
import { Link } from "react-router-dom";
import "./courses.scss";
import Arrow from "../../Assets/arrow.png";

const Course = (props) => (
  <div className="card-container">
    {props.data.map((item) => (
      <div className="course-card" key={item.id}>
        <div className="course-details">
          <h1>{item.code}</h1>
          <p>{`Course title: ${item.title}`}</p>
        </div>
        <div className="course-buttons">
          <Link>view</Link>
          <Link to="/play">
            {" "}
            <img src={Arrow} alt="" /> watch{" "}
          </Link>
          {/* <span> &gt; </span> */}
        </div>
      </div>
    ))}
  </div>
);

export default Course;
