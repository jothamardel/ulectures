import React from "react";
import { Link } from "react-router-dom";
import "./sign-up.scss";
import Vector from "../../Assets/Vector.png";

class SignUp extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="sign-up">
          <div className="container">
            <h1 className="sign-in-up-header text-center">Register</h1>
            <form action="">
              <div className="input-field">
                <input type="text" name="name" placeholder="Full Name" />
              </div>
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="input-field">
                <input type="tel" name="phone" placeholder="Phone Number" />
              </div>
              <div className="input-field">
                <input type="text" name="matric-no" placeholder="Matric No" />
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                />
                <img src={Vector} alt="" />
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Comfirm Password"
                  id="password"
                />
                <img src={Vector} alt="" />
              </div>
              <div className="submit">
                <Link to="/signin">
                  <input type="submit" name="submit" value="create account" />
                </Link>
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="last-child" to="/signin">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
