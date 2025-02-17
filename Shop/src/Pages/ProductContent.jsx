import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link, useParams } from "react-router-dom";
import arrow from "../assets/cross.png";
import "./Css/ProductContent.css";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
const ProductContent = () => {
  const { all_product } = useContext(ProductContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product-content">
      <hr />
      {/* <div className="breadcrum">
        all_product <img src={arrow} alt="" />{" "}
        <Link
          to={`/${all_product.category}`}
          style={{ textDecoration: "none", color: "#5e5e5e" }}
        >
          {all_product.category}
        </Link>
        <img src={arrow} alt="" /> {product.name}
      </div> */}
      <Breadcrum />
      <div className="content-detail">
        <img className="cross-img" src={product.image} alt="" />
        <div className="content-description">
          <h2>{product.name}</h2>
          <div className="description-box">
            <p className="description-area">{product.description}</p>
          </div>

          <div className="content-price">
            <p className="new-price">Rs.{product.new_price}</p>
            <p className="old-price">{product.old_price}</p>
          </div>

          <Link to="/buynow">
            <button className="button-buy">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
