import React, { useContext } from "react";
import "./Breadcrum.css";
import arrow from "../../assets/cross.png";
import { ProductContext } from "../../Context/ProductContext";
const Breadcrum = (props) => {
  const { all_product } = useContext(ProductContext);
  return (
    <div className="breadcrum">
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{" "}
      {all_product.category} <img src={arrow} alt="" /> {all_product.name}
    </div>
  );
};

export default Breadcrum;
