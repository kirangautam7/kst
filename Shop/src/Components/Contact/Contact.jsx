import React from "react";
import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
const Contact = ({ hideContact }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "664f088d-ae10-4d96-821a-3185d147c3f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 1000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="hide-contact" onClick={hideContact}></div>
      <div className="contact">
        <h3>
          Send Us Message <img src={msg} alt="" />
        </h3>
        <p>
          Feel free to reach out us through contact form or below contact
          information
        </p>
        <div className="contact-col">
          <div className="contact-left">
            <ul>
              <li>
                <img src={mail} alt="" />
                koreantradeshop@gmail.com
              </li>
              <li>
                <img src={phone} alt="" />
                +977-9707789646, +977-
              </li>
              <li>
                <img src={location} alt="" />
                HongKong Bazaar, Narayangard, Chitwan
              </li>
            </ul>
          </div>

          <div>
            <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
              <label>Your Phone Number</label>
              <input
                type="phone"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
              <label>Enter Your Message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="6"
              ></textarea>
              <button type="submit" className="dark-btn btn">
                Submit now
              </button>
            </form>
            <span style={{ fontSize: "10px" }}>{result}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
