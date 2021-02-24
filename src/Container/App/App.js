import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../Components/Homepage/homePage";
import SignUp from "../Sign-up/sign-up";
import SignIn from "../Sign-in/sign-in";
import Dashboard from "../../Components/Dashboard/dashboard";
import "./App.css";
// import UpdateProfile from "../../Components/Profile/profile";
// import LecturerDetail from "../Lecturers-details/lec-details-modal";
// import Course from "../Courses/courses";
// import CourseOutline from "../Course-outline/course-outline";
// import PayCourse from "../Pay-course/pay-course";
// import PlayerPage from "../Player-component/player-component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch> */}
        <Dashboard />
        {/* <UpdateProfile /> */}
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
