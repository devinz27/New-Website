import "./Main.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";

function Main({ page, switchToContact }) {
  const callBackApp = (value) => {
    switchToContact(value);
  };
  return (
    <div className="Main">
      <div className="profile">
        <div className="image"></div>
      </div>
      <div className="content">
        {page === "Home" ? (
          <Home clickedContact={callBackApp}></Home>
        ) : page === "About" ? (
          <About></About>
        ) : page === "Contact" ? (
          <Contact></Contact>
        ) : (
          <Resume></Resume>
        )}
      </div>
    </div>
  );
}

export default Main;
