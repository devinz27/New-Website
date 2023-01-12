import "./Home.css";
import Typewriter from "typewriter-effect";

function Home({ clickedContact }) {
  return (
    <div className="Home">
      <div className="home-wrapper">
        <h1 className="name">DEVIN ZHOU</h1>
        <span className="home-line"></span>
        <Typewriter
          options={{
            strings: [
              "CS Student @ UWaterloo",
              "Software Engineer",
              "Movie Binger",
              "Early Bird",
              "Food Enjoyer",
              "Full-Stack Developer",
              "Fitness Enthusiast",
            ],
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
