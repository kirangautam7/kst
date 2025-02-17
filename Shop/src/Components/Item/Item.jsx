import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-new-price">Rs.{props.new_price}</div>
        <div className="item-old-price">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
