import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";
import { PuffLoader } from "react-spinners";

function App() {
  const [page, setPage] = useState("Home");
  const [selected, setSelected] = useState("Home");
  const [sidebar, setSidebar] = useState("closed");
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resizeWidth = () => changeDeviceSize(window.innerWidth);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);

    window.addEventListener("resize", resizeWidth); // Update the width on resize

    return () => window.removeEventListener("resize", resizeWidth);
  }, []);

  const callBackParent = (value) => {
    setPage(value);
    setSelected(value);
  };

  // used for button on home page
  const switchToContact = (value) => {
    console.log(value);
    setPage(value);
    setSelected(value);
  };

  const toggleSidebar = (value) => {
    setSidebar(value);
  };

  return loading === true ? (
    <div className="loader-wrapper">
      <PuffLoader size={100} color="#000000"></PuffLoader>
    </div>
  ) : (
    <div className="App">
      <div className="app-wrapper">
        {deviceSize > 850 ? (
          <Nav handlePageSwitch={callBackParent} selected={selected} />
        ) : (
          <div className="mobile-menu">
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
          </div>
        )}
        <div className="left-border"></div>
        <div className="right-border"></div>
        <Main page={page} switchToContact={switchToContact} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
