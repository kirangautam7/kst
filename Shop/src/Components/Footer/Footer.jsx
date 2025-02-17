import React, { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../../assets/footer_logo.png";
import insta_icon from "../../assets/Instagram_icon.png.webp";
import fb_icon from "../../assets/facebook.svg";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import About from "../About/About";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
const Footer = () => {
  //   useEffect(() => {
  //     window.history.scrollRestoration = "manual";
  //   }, []);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  showContact || showAbout
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const hideContact = () => {
    return setShowContact(false), setShowAbout(false);
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" className="logo" />
        {/* <p>Moonlight Upahar</p> */}
      </div>
      <ul className="footer-links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Products</li>
        </Link>
        <li>Blog</li>
        <li
          onClick={() => {
            setShowContact(true);
          }}
        >
          Contact Us
        </li>
        {showContact && <Contact hideContact={hideContact} />}
        <li
          onClick={() => {
            setShowAbout(true);
          }}
        >
          About Us
        </li>
        {showAbout && <About hideContact={hideContact} />}
      </ul>
      <div className="footer-social-icon">
        <a href="https://www.facebook.com/koreanshoptrade" target="_blank">
          <img src={fb_icon} alt="" />
        </a>
        <a href="https://www.instagram.com/koreantradeshop/" target="_blank">
          <img src={insta_icon} alt="" />
        </a>
      </div>
      <div className="contact-detail">
        <div className="phone">
          <img src={phone} alt="" />
          <p>+977 98xxxxxxx, 98xxxxxxxx</p>
        </div>
        <div className="phone">
          <img src={mail} alt="" />
          <p>koreantradeshop@gmail.com</p>
        </div>
        <div className="phone">
          <img src={location} alt="" />
          <p>HongKong Bazaar, Narayangard, Chitwan</p>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
