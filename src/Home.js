import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="Home">
      <div className="home-wrapper">
        <h1>DEVIN ZHOU</h1>
        <span className="line"></span>
        {/* <div className="title"> */}
        <Typewriter
          options={{
            strings: ["Hello"],
            autoStart: true,
            loop: true,
          }}
        ></Typewriter>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
