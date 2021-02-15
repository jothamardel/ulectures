import React from "react";
import "./courses.scss";
import Arrow from "../../Assets/arrow.png";

const Course = (props) => (
  <div className="card-container">
    <div className="course-card">
      <div className="course-details">
        <h1>CS111</h1>
        <p>Course title: Maths</p>
      </div>
      <div className="course-buttons">
        <button>view</button>
        <button>
          {" "}
          <img src={Arrow} alt="" /> watch{" "}
        </button>
        {/* <span> &gt; </span> */}
      </div>
    </div>
  </div>
);

export default Course;
