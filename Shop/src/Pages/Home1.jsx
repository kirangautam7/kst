import React from "react";
import DisplayItem from "../Components/DisplayItem/DisplayItem";
import FbChat from "../Components/FacebookChat/FbChat";
import "./Css/Home1.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "../Components/ProductList.jsx/ProductList";

const Home1 = () => {
  return (
    <div className="home-1">
      <hr />
      <h1 className="category-topic">Our Products</h1>
      <hr className="hr-topic" />
      <DisplayItem />
    </div>
  );
};

export default Home1;
