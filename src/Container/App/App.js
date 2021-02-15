import "./App.css";
// import LecturerDetail from "../Lecturers-details/lec-details-modal";
// import Card from '../Lecturers/card';
// import SignUp from "../Sign-up/sign-up";
// import SignIn from "../Sign-in/sign-in";
// import Course from "../Courses/courses";
// import CourseOutline from "../Course-outline/course-outline";
// import PayCourse from "../Pay-course/pay-course";
import PlayerList from "../Player-list/player-list";
import Player from "../Player/player";

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <SignUp/> */}
      {/* <Card /> */}
      {/* <LecturerDetail /> */}
      {/* <Course /> */}
      {/* <CourseOutline /> */}
      {/* <PayCourse /> */}
      <Player />
      <PlayerList />
    </div>
  );
}

export default App;
