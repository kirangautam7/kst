import React from "react";
import insta_icon from "../assets/Instagram_icon.png.webp";
import fb_icon from "../assets/facebook.svg";
import "./Css/Developing.css";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
const Developing = () => {
  return (
    <div className="developing">
      <hr />
      <div className="dev-content">
        To order product visit our Social media page:
        <div className="social-icon">
          <a href="https://www.facebook.com/koreanshoptrade" target="_blank">
            <img src={fb_icon} alt="" />
          </a>
          <a href="https://www.instagram.com/koreantradeshop/" target="_blank">
            <img src={insta_icon} alt="" />
          </a>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default Developing;
