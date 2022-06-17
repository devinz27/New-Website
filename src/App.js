import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

function App() {
  const [page, setPage] = useState("Home");
  const [selected, setSelected] = useState("Home");
  const [sidebar, setSidebar] = useState("closed");

  const callBackParent = (value) => {
    setPage(value);
    setSelected(value);
  };
  const switchToContact = (value) => {
    setPage(value);
    setSelected(value);
  };

  const toggleSidebar = (value) => {
    setSidebar(value);
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        {/* <Nav handlePageSwitch={callBackParent} selected={selected} /> */}
        <MobileNav
          handlePageSwitch={callBackParent}
          handleSideBar={toggleSidebar}
          current={sidebar}
        ></MobileNav>
        <Sidebar
          handlePageSwitch={callBackParent}
          sidebar={sidebar}
          handleSideBar={toggleSidebar}
        ></Sidebar>
        <div className="left-border"></div>
        <div className="right-border"></div>
        <Main page={page} switchToContact={switchToContact} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
