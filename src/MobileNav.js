import "./MobileNav.css";
import React from "react";

function MobileNav({ handlePageSwitch, handleSideBar, current }) {
  console.log(current);
  function handleClick(list) {
    console.log("qer,", list);
    handlePageSwitch(list.value);
  }

  function toggleSidebar() {
    if (current === "open") {
      handleSideBar("closed");
    } else {
      handleSideBar("open");
    }
  }

  return (
    <div className="MobileNav">
      <div
        className="mobilelogo"
        onClick={() => {
          const logoClick = { value: "Home" };
          handleClick(logoClick);
        }}
      >
        <img
          src={require("./static/logo-black.png")}
          alt="logo-black"
          className="mobilelogo"
        />
      </div>
      <div className="trigger" onClick={() => toggleSidebar()}>
        <img
          src={require(`./static/${
            current === "open" ? "close.png" : "hamburger.png"
          }`)}
          alt="hamburger"
          className="hamburger"
        />
      </div>
    </div>
  );
}

export default MobileNav;
