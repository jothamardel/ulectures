import React from "react";
import "./lec-details-modal.scss";
import Star from "../../assets/Rating.png";
import Phone from "../../assets/phone.png";
import Mail from "../../assets/mail.png";
import Place from "../../assets/bussiness.png";
import Image from "../../assets/Image.png";
import Close from "../../assets/close.png";

const LecturerDetail = (props) => (
  <div className="lec-details">
    <div className="detail-img">
      <img src={Image} alt="" />
    </div>
    <img src={Close} alt="" id="close" />
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
        <button>Go to course</button>
      </div>
    </div>
  </div>
);

export default LecturerDetail;
