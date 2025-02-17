import React, { useContext, useState } from "react";
import "./DisplayItem.css";
import { ProductContext } from "../../Context/ProductContext";
import Item from "../Item/Item";
const DisplayItem = () => {
  const { all_product } = useContext(ProductContext);

  return (
    <div className="display-item">
      {all_product.map((item, i) => {
        return (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        );
      })}
      {/* <button
        onClick={all_product.slice(16).map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      >
        view all product
      </button> */}
    </div>
  );
};

export default DisplayItem;
