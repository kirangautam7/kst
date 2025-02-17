import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "../Component/AddProduct/AddProduct";
import ListProduct from "../Component/ListProduct/ListProduct";
const Admin = () => {
  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <hr />

      <ul>
        <Link to="/addproduct">
          <li>Add Product</li>
        </Link>

        <Link to="/listproduct">
          <li>Show all product</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/listproduct" element={<ListProduct />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
