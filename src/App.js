import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const [selected, setSelected] = useState("Home");

  const callBackParent = (value) => {
    setPage(value);
    setSelected(value);
  };
  const switchToContact = (value) => {
    setPage(value);
    setSelected(value);
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <Nav handlePageSwitch={callBackParent} selected={selected} />
        <div className="left-border"></div>
        <div className="right-border"></div>
        <Main page={page} switchToContact={switchToContact} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
