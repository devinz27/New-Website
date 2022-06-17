import "./Sidebar.css";
import React from "react";

function Sidebar({ handlePageSwitch, sidebar, handleSideBar }) {
  console.log(sidebar);
  function handleClick(list) {
    console.log("qer,", list);
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
      </div>
    </div>
  );
}

export default Sidebar;
