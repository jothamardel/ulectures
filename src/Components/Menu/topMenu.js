import React from "react";
import { Link } from "react-router-dom";
import Search from "../../Assets/search.png";
import User from "../../Assets/user.png";
import Logo from "../../Assets/logo.png";
import "./topMenu.scss";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false,
    };
  }

  toggleInput = (event) => {
    this.setState((prevState, prevProps) => ({
      showInput: !prevState.showInput,
    }));
  };

  render() {
    return (
      <div className="menu">
        <div className="content">
          <div className="logo">
            <Link to="/dashboard">
              <img src={Logo} alt="Logo-Pix" />
            </Link>
          </div>
          <div className="Icons">
            <div className="searchIcon">
              {this.state.showInput ? (
                <>
                  <input
                    type="text"
                    placeholder="search..."
                    onChange={(event) => this.props.setInput(event)}
                  />
                  <span onClick={this.toggleInput}>X</span>
                </>
              ) : (
                <>
                  <p>Welcome, Harry</p>
                  <img
                    src={Search}
                    alt="search-icon"
                    onClick={this.toggleInput}
                  />
                </>
              )}
            </div>
            <div className="userIcon">
              <Link to="/profile">
                <img src={User} alt="user-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
