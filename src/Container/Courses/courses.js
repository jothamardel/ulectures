import React from "react";
import "./courses.scss";
import Arrow from "../../Assets/arrow.png";

const data = [
  {
    id: 0,
    code: "CS111",
    title: "Computer Science",
  },
  {
    id: 1,
    code: "MTH101",
    title: "Maths",
  },
  {
    id: 2,
    code: "ST111",
    title: "Statistics",
  },
  {
    id: 3,
    code: "CS211",
    title: "Computer Science",
  },
  {
    id: 4,
    code: "CS311",
    title: "Computer Science",
  },
];

const Course = (props) => (
  <div className="card-container">
    {data.map((item) => (
      <div className="course-card" key={item.id}>
        <div className="course-details">
          <h1>{item.code}</h1>
          <p>{`Course title: ${item.title}`}</p>
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
    ))}
  </div>
);

export default Course;
