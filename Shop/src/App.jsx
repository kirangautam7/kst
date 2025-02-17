import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home1";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import ProductContent from "./Pages/ProductContent";

import Home1 from "./Pages/Home1";
import Developing from "./Pages/Developing";
import ProductList from "./Components/ProductList.jsx/ProductList";
import Footer from "./Components/Footer/Footer";

const App = () => {
  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  // }, []);
  // const [menu, setMenu] = useState("");

  return (
    <div className="app">
      {/* <BrowserRouter> */}
      <div className="nav-home">
        <Navbar />
        <hr />
        <ul className="app-ul">
          {" "}
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              All Product
            </Link>
          </li>
          <li>
            <Link
              to="/jewellry"
              style={{ textDecoration: "none", color: "black" }}
            >
              Jewellry
            </Link>
          </li>
          <li>
            <Link
              to="/cosmetic"
              style={{ textDecoration: "none", color: "black" }}
            >
              Cosmetic
            </Link>
          </li>
          <li>
            <Link
              to="/combo"
              style={{ textDecoration: "none", color: "black" }}
            >
              Combo
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/product/:productId" element={<ProductContent />}>
          {/* <Route path=":productId" element={<ProductContent />} /> */}
        </Route>
        <Route path="/buynow" element={<Developing />}></Route>

        <Route
          path="/jewellry"
          element={<ProductList category="jewellry" />}
        ></Route>
        <Route
          path="/cosmetic"
          element={<ProductList category="cosmetic" />}
        ></Route>
        <Route path="/combo" element={<ProductList category="combo" />}></Route>
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
