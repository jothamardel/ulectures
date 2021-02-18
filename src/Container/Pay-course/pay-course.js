import React from "react";
import "./pay-course.scss";
import Payment from "../../assets/payment.png";

const PayCourse = (props) => (
  <div className="card-container">
    <div className="pay-card">
      <div className="pay-details">
        <p>Pay For Maths?</p>
      </div>
      <div className="pay-buttons">
        <button>close</button>
        <button>
          {" "}
          <img src={Payment} alt="" /> proceed to payment{" "}
        </button>
        {/* <span> &gt; </span> */}
      </div>
    </div>
  </div>
);

export default PayCourse;
