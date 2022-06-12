import "./Home.css";
import Typewriter from "typewriter-effect";
import Main from "./Main";

function Home({ clickedContact }) {
  return (
    <div className="Home">
      <div className="home-wrapper">
        <h1 className="name">DEVIN ZHOU</h1>
        <span className="home-line"></span>
        <Typewriter
          options={{
            strings: ["CS Student", "Software Engineer", "Food Enjoyer"],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        ></Typewriter>
        <button
          onClick={() => clickedContact("Contact")}
          className="home-connect"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Home;
