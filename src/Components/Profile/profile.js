import React from "react";
import "./profile.scss";

function UpdateProfile() {
  return (
    <div className="profileContent">
      <div className="profile-head">
        <h1>John Doe</h1>
      </div>
      <div className="profile-button">
        <button>Update</button>
      </div>
    </div>
  );
}
export default UpdateProfile;
