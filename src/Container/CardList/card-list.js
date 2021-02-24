import React from "react";
import Card from "../../Components/Card/card";
import "./card-list.styles.scss";

const CardList = (props) => (
  <div className="card-container">
    {props.data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
);

export default CardList;
