import React, { createContext, useState, useEffect } from "react";
// import all_product from "../assets/data";
export const ProductContext = createContext(null);
const ProductContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "Application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const contextValue = { all_product };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
