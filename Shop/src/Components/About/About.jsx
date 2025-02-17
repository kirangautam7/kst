import React from "react";
import "./About.css";
import shop from "../../assets/shop.jpg";
const About = ({ hideContact }) => {
  return (
    <>
      <div className="hide-contact" onClick={hideContact}></div>
      <div className="about">
        <h1>Who we are..</h1>
        <div className="about-content">
          <img src={shop} alt="" />
          <p>
            Welcome to <strong>Korean Shop Trade</strong>, your trusted
            destination for premium cosmetics and jewelry in Narayangarh,
            Chitwan. Located in the heart of Hongkong Bazaar, we've been proudly
            serving the community for over 12 years. Our carefully curated
            selection of top-quality Korean beauty products and elegant jewelry
            pieces ensures that you always find the perfect item to suit your
            style and needs. Visit us today in-store or conveniently shop online
            through our website to experience the best in beauty and
            craftsmanship.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
