import React from "react";
import "./homePage.scss";
import Pix from "../../assets/full.png";

function Home() {
  return (
    <div className="Home">
      <div className="appContainer">
        <div className="homeImage">
          <img src={Pix} alt="full-pix" />
        </div>
        <div className="paragraph">
          <h2>Level Up!</h2>
          <p>
            Top lecturers from different universities, teaching millions of
            students on uLectures.
          </p>
        </div>
      </div>

      <div className="container">
        <h1>uLectures</h1>
        <button type="btn">Start Learning</button>
      </div>
    </div>
  );
}

export default Home;
