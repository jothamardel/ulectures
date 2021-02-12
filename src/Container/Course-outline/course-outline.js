import React from "react";
import "./course-outline.scss";
import Close from "../../Assets/close.png";

const CourseOutline = ({}) => (
  <div className="course-outline">
    <div className="outline-header">
      <h1>Maths Outline</h1>
    </div>
    <img src={Close} alt="" id="close" />
    <div className="outline-body">
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus mi
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Congue lacus mi volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus mi
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Congue lacus mi volutpat.
      </p>
    </div>
    <div className="outline-body">
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus mi
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Congue lacus mi volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus mi
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Congue lacus mi volutpat.
      </p>
    </div>
    <div className="outline-button">
      <button>Watch</button>
    </div>
  </div>
);

export default CourseOutline;
