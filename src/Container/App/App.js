import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../Components/Homepage/homePage";
import SignUp from "../Sign-up/sign-up";
import SignIn from "../Sign-in/sign-in";
import Dashboard from "../../Components/Dashboard/dashboard";
import "./App.css";
import UpdateProfile from "../../Components/Profile/profile";
import LecturerDetail from "../Lecturers-details/lec-details-modal";
import CourseList from "../CourseList/course-list";
import CourseOutline from "../Course-outline/course-outline";
import PlayerPage from "../Player-component/player-component";
// import PayCourse from "../Pay-course/pay-course";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={UpdateProfile} />
          <Route exact path="/lecturer/:id" component={LecturerDetail} />
          <Route exact path="/course" component={CourseList} />
          <Route exact path="/course-outline" component={CourseOutline} />
          <Route exact path="/play" component={PlayerPage} />
        </Switch>
        {/* <PayCourse /> */}
        {/* <PlayerPage /> */}
      </div>
    );
  }
}

export default App;
