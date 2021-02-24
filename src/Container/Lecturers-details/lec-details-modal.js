import React from "react";
import { Link } from "react-router-dom";
import Star from "../../Assets/Rating.png";
import Phone from "../../Assets/phone.png";
import Mail from "../../Assets/mail.png";
import Place from "../../Assets/bussiness.png";
import Image from "../../Assets/Image.png";
import Close from "../../Assets/close.png";
import "./lec-details-modal.scss";

const LecturerDetail = (props) => (
  <div className="lec-details">
    <div className="detail-img">
      <img src={Image} alt="" />
    </div>
    <Link to="/dashboard">
      <img src={Close} alt="" id="close" />
    </Link>
    <div className="detail-body">
      <h3> Lukeman Job</h3>
      <div className="star-icon">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus mi
        volutpat.
      </p>
      <div className="detail-links">
        <div className="link">
          <ul>
            <li>
              <img src={Place} alt="" />
            </li>
            <li>
              <img src={Phone} alt="" />
            </li>
            <li>
              <img src={Mail} alt="" />
            </li>
          </ul>
        </div>
        <div className="link">
          <ul>
            <li>
              <p>University of Jos</p>
            </li>
            <li>
              <p className="phone">07005670001</p>
            </li>
            <li>
              <p className="mail">lukemanjob@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-button">
        <Link to="/course">
          <button>Go to course</button>
        </Link>
      </div>
    </div>
  </div>
);

export default LecturerDetail;
