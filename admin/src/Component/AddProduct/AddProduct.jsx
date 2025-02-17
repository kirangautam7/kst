import React, { useState } from "react";
import test from "../../assets/react.svg";
import "./AddProduct.css";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "cosmetic",
    new_price: "",
    old_price: "",
    description: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("product added") : alert("failed");
        });
    }
  };

  return (
    <div>
      <p>Product Name</p>
      <input
        value={productDetails.name}
        onChange={changeHandler}
        type="text"
        name="name"
        placeholder=""
      />
      <p>Price</p>
      <input
        value={productDetails.old_price}
        onChange={changeHandler}
        type="text"
        name="old_price"
        placeholder=""
      />
      <p>Offer Price</p>
      <input
        value={productDetails.new_price}
        onChange={changeHandler}
        type="text"
        name="new_price"
        placeholder=""
      />
      <p>Product category</p>
      <select
        value={productDetails.category}
        onChange={changeHandler}
        name="category"
      >
        <option value="cosmetic">Cosmetic</option>
        <option value="jewellry">Jewellry</option>
        <option value="combo">combo</option>
        <option value="other">other</option>
      </select>
      <p>Image</p>
      <label htmlFor="file-input">
        <img
          src={image ? URL.createObjectURL(image) : test}
          className="addproduct_thumnail-img"
          alt=""
        />
      </label>
      <input
        onChange={imageHandler}
        type="file"
        id="file-input"
        name="image"
        hidden
      />
      <p>Description</p>
      <textarea
        value={productDetails.description}
        onChange={changeHandler}
        rows="10"
        cols="100"
        name="description"
      ></textarea>
      <button
        onClick={() => {
          Add_Product();
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
