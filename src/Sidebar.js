import "./Sidebar.css";
import React from "react";

function Sidebar({ handlePageSwitch, sidebar, handleSideBar }) {
  function handleClick(list) {
    handlePageSwitch(list.value);
  }
  function toggleSidebar() {
    if (sidebar === "open") {
      handleSideBar("closed");
    } else {
      handleSideBar("open");
    }
  }

  const buttonList = [
    { value: "Home" },
    { value: "About" },
    { value: "Contact" },
  ];
  return (
    <div className={(sidebar === "open" ? "open " : "closed ") + "Sidebar"}>
      <div className="sidebar-wrapper">
        <div className="avatar">
          <div className="avatar-image"></div>
        </div>
        <div className="mobilenavbuttons">
          {buttonList.map((list) => (
            <button
              onClick={() => {
                handleClick(list);
                toggleSidebar();
              }}
              key={list.value}
              className="mobilenavbutton"
            >
              {list.value}
            </button>
          ))}
        </div>
        <div className="mobilesocial">
          <a
            href="https://www.facebook.com/devinzhou2/"
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              src={require("./static/facebook.png")}
              alt="facebook"
              className="mobilefacebook"
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
              className="mobileinstagram"
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
              className="mobilelinkedin"
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
              className="mobilegithub"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
