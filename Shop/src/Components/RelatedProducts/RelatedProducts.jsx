import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";

import Item from "../Item/Item";

const RelatedProducts = () => {
  const [newCollection, setNewCollection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNewCollection(data));
  }, []);
  return (
    <div className="new-collection">
      <h1>Related Product</h1>
      <hr className="hr-topic" />
      <div className="collection">
        {newCollection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
