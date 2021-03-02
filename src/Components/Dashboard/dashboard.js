import React from "react";
import Menu from "..//Menu/topMenu";
import CardList from "../../Container/CardList/card-list";
// import Footer from "../Footer/footer";
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
    // photoUrl: `https://robohash.org/${name}?set=set5&size=50x50`
  },
  {
    id: 1,
    name: "Dr. Ahmed Tanko",
    dept: "Mathematics",
    // photoUrl: `https://robohash.org/${this.name}?set=set5&size=50x50`
  },
  {
    id: 2,
    name: "Dr. Shola Johnson",
    dept: "Business Administration",
    // photoUrl: `https://robohash.org/${this.name}?set=set5&size=50x50`
  },
  {
    id: 3,
    name: "Prof. Bashir Musa",
    dept: "Entreprenuership",
    // photoUrl: `https://robohash.org/${this.name}?set=set5&size=50x50`
  },
  {
    id: 4,
    name: "Prof. Eric Haggai",
    dept: "Administration",
    // photoUrl: `https://robohash.org/${this.name}?set=set5&size=50x50`
  },
  {
    id: 5,
    name: "John Doe",
    dept: "Food Nutrition",
    // photoUrl: `https://robohash.org/${this.name}?set=set5&size=50x50`
  },
];
