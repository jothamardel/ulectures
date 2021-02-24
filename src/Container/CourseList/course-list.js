import React from "react";
import Menu from "../../Components/Menu/topMenu";
import Course from "../Courses/courses";

class CourseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
    };
  }

  setInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const filteredResult = data.filter((item) =>
      item.code.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );
    return (
      <>
        <Menu setInput={this.setInput} />
        <Course data={filteredResult} />
      </>
    );
  }
}

export default CourseList;

var data = [
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
