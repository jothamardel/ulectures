import React from "react";
import Menu from "..//Menu/topMenu";
import CardList from "../../Container/CardList/card-list";
import Footer from "../Footer/footer";
import "./dashboard.styles.scss";

class Dashboard extends React.Component {
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
      item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );
    return (
      <>
        <Menu setInput={this.setInput} />
        <CardList data={filteredResult} />
        <Footer />
      </>
    );
  }
}

export default Dashboard;

var data = [
  {
    id: 0,
    name: "Prof. Lukeman John",
    dept: "Accounting",
  },
  {
    id: 1,
    name: "Dr. Ahmed Tanko",
    dept: "Mathematics",
  },
  {
    id: 2,
    name: "Dr. Shola Johnson",
    dept: "Business Administration",
  },
  {
    id: 3,
    name: "Prof. Bashir Musa",
    dept: "Entreprenuership",
  },
  {
    id: 4,
    name: "Prof. Eric Haggai",
    dept: "Administration",
  },
  {
    id: 5,
    name: "John Doe",
    dept: "Food Nutrition",
  },
];
