import React from "react";
import "./App.css";
import Home from "../../Components/Homepage/homePage";
// import Footer from "../../Components/Footer/footer";
import Menu from "../../Components/Menu/topMenu";
// import UpdateProfile from "../../Components/Profile/profile";
// import LecturerDetail from "../Lecturers-details/lec-details-modal";
// import Card from "../Lecturers/card";
// import SignUp from "../Sign-up/sign-up";
// import SignIn from "../Sign-in/sign-in";
// import Course from "../Courses/courses";
// import CourseOutline from "../Course-outline/course-outline";
// import PayCourse from "../Pay-course/pay-course";
// import PlayerPage from "../Player-component/player-component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Menu />
        {/* <Footer /> */}
        {/* <UpdateProfile /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <Card /> */}
        {/* <LecturerDetail /> */}
        {/* <Course /> */}
        {/* <CourseOutline /> */}
        {/* <PayCourse /> */}
        {/* <PlayerPage /> */}
      </div>
    );
  }
}

export default App;
