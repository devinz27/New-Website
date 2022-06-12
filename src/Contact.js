import "./Contact.css";

function Contact() {
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
                <a href="?">devinzhou101@gmail.com</a>
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
      </div>
    </div>
  );
}

export default Contact;
