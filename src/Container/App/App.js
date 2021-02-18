import React from "react";
import "./App.css";
import LecturerDetail from "../Lecturers-details/lec-details-modal";
import Card from "../Lecturers/card";
import SignUp from "../Sign-up/sign-up";
import SignIn from "../Sign-in/sign-in";
import Course from "../Courses/courses";
import CourseOutline from "../Course-outline/course-outline";
import PayCourse from "../Pay-course/pay-course";
import PlayerPage from "../Player-component/player-component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <Card /> */}
        {/* <LecturerDetail /> */}
        {/* <Course /> */}
        {/* <CourseOutline /> */}
        {/* <PayCourse /> */}
        <PlayerPage />
      </div>
    );
  }
}

export default App;
