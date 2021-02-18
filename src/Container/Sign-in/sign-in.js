import React from "react";
import "./sign-in.scss";
import Vector from "../../assets/Vector.png";

class SignIn extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="sign-in">
          <div className="container">
            <h1 className="sign-in-up-header text-center">Sign In</h1>
            <form action="">
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  id="password"
                />
                <img src={Vector} alt="" />
              </div>
              <div className="submit">
                <input type="submit" name="submit" value="login" />
              </div>
            </form>
            <p className="text-center p-one">
              <a>forgot password?</a>
            </p>
            <p className="text-center">
              Don’t have an account?{" "}
              <a className="last-child">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
