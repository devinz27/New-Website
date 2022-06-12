import "./Contact.css";
import { useState } from "react";
import { db } from "./firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      alert("Please enter your name");
    } else if (email === "" || email.includes("@") === false) {
      alert("Please enter a valid email");
    } else if (message === "") {
      alert("Please enter a message");
    } else {
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          alert("Message has been sent!");
        })
        .catch((error) => {
          alert(error.message);
        });
      setName("");
      setMessage("");
      setEmail("");
    }
  }
  return (
    <div className="Contact">
      <div className="contact-wrapper">
        <div className="contact-title">
          <h2>GET IN TOUCH</h2>
          <span className="contact-line"></span>
        </div>
        <div className="contact-squares">
          <div className="contact-square">
            <div className="inner-square">
              <img
                src={require("./static/location.png")}
                alt="location"
                className="location"
              />
              <span>Toronto, Ontario</span>
            </div>
          </div>
          <div className="contact-square">
            <div className="inner-square">
              <img
                src={require("./static/email.png")}
                alt="email"
                className="email"
              />
              <span>
                <a href="?">Email Me</a>
              </span>
            </div>
          </div>
          <div className="contact-square">
            <div className="inner-square">
              <img
                src={require("./static/phone.png")}
                alt="phone"
                className="phone"
              />
              <span>416-819-0365</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="left-contact-form">
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <input
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              ></input>
              <input
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              ></input>
              <textarea
                className="input-field"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              ></textarea>
              <button className="form-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="right-contact-form">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.30943582457!2d-79.37805805!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1655057045796!5m2!1sen!2sca"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
