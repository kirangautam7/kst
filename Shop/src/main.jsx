import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductContextProvider from "./Context/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>
);
