import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
