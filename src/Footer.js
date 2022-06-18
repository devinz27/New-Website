import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <h3>made with&nbsp;</h3>
        <img
          src={require("./static/react.png")}
          alt="react"
          className="react"
        />
        <h3> &nbsp;+&nbsp;</h3>
        <img
          src={require("./static/magic.png")}
          alt="magic"
          className="magic"
        />
      </div>
      <div className="icon-wrapper">
        <a
          href="https://www.facebook.com/devinzhou2/"
          rel="noreferrer"
          target={"_blank"}
        >
          <img
            src={require("./static/facebook.png")}
            alt="facebook"
            className="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/devinzhou/"
          rel="noreferrer"
          target={"_blank"}
        >
          <img
            src={require("./static/instagram.png")}
            alt="instagram"
            className="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/devinzhou"
          rel="noreferrer"
          target={"_blank"}
        >
          <img
            src={require("./static/linkedin.png")}
            alt="linkedin"
            className="linkedin"
          />
        </a>
        <a
          href="https://www.github.com/devinz27"
          rel="noreferrer"
          target={"_blank"}
        >
          <img
            src={require("./static/github.png")}
            alt="github"
            className="github"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
