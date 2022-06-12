import "./Nav.css";
import React, { useState } from "react";

function Nav({ handlePageSwitch, selected }) {
  // const [selected, setSelected] = useState("Home");
  console.log("asd", selected);
  function handleClick(list) {
    // setSelected(list.value);
    handlePageSwitch(list.value);
  }

  const buttonList = [
    { value: "Home" },
    { value: "About" },
    { value: "Contact" },
  ];
  return (
    <div className="Nav">
      <div className="logo">
        <img
          src={require("./static/logo-black.png")}
          alt="logo-black"
          className="logo"
        />
      </div>
      <div className="navbuttons">
        {buttonList.map((list) => (
          <button
            onClick={() => handleClick(list)}
            key={list.value}
            className={
              (selected === list.value ? "pressed " : "notpressed ") +
              "navbutton"
            }
          >
            {list.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Nav;
