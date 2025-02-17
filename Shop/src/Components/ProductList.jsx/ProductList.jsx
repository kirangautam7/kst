import React, { useContext } from "react";
import "./ProductList.css";
import { ProductContext } from "../../Context/ProductContext";
import Item from "../Item/Item";
const ProductList = (props) => {
  const { all_product } = useContext(ProductContext);
  return (
    <div className="product-list">
      <hr />
      <h1 className="category-topic">{props.category}</h1>

      <hr className="hr-topic" />

      <div className="product-col">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ProductList;
