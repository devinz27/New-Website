import "./About.css";
import { useEffect, useState } from "react";

function RandomJoke(url) {
  const [joke, setJoke] = useState({ data: null, loading: true });
  useEffect(() => {
    setJoke({ data: null, loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((text) => {
        setJoke({ data: text.joke, loading: false });
      });
  }, [url]);

  return joke;
}

function About() {
  const joke = RandomJoke(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  );

  return (
    <div className="About">
      <div className="about-wrapper">
        <div className="bio">
          <div className="bio-title">
            <h2>ABOUT ME</h2>
            <span className="bio-line"></span>
          </div>
          <div className="bio-text">
            <div className="left-text">
              <p>
                Hello There! My name is <strong>Devin Zhou</strong>. I am a 4th
                year Computer Science student studying at the University of
                Waterloo.
              </p>
              <p>
                When I'm not studying, working on projects or exercising, you
                can find me socializing with friends or watching funny videos.
                I'm always willing to chat and open to new opportunities!
              </p>
            </div>
            <div className="right-text">
              <ul className="right-ul">
                <li>
                  <span className="first-li">Name:</span>
                  <span className="second-li">Devin Zhou</span>
                </li>
                <li>
                  <span className="first-li">City:</span>
                  <span className="second-li">Toronto</span>
                </li>
                <li>
                  <span className="first-li">Study:</span>
                  <span className="second-li">University of Waterloo</span>
                </li>
                <li>
                  <span className="first-li">Degree:</span>
                  <span className="second-li">
                    Bachelor of Computer Science
                  </span>
                </li>
                <li>
                  <span className="first-li">Email:</span>
                  <span className="second-li">
                    <a href="mailto:devinzhou101@gmail.com">
                      devinzhou101@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span className="first-li">Phone:</span>
                  <span className="second-li">416-819-0365</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experiences">
          <div className="experience-wrapper">
            <div className="interests">
              <div className="interests-title">
                <h2>INTERESTS</h2>
                <span className="interests-line"></span>
              </div>
              <ul className="interests-ul">
                <li>Tasting New Cuisines</li>
                <li>Traveling Abroad</li>
                <li>Working Out</li>
                <li>Learning New Tech</li>
                <li>Watching Movies</li>
              </ul>
            </div>
            <div className="experience-list">
              <div className="experience-title">
                <h2>EXPERIENCES</h2>
                <span className="experience-line"></span>
              </div>
              <ul className="experience-ul">
                <li>
                  <div className="date-li">
                    <div className="date-li-wrapper">
                      <span>Sep 2022 - Dec 2022</span>
                    </div>
                  </div>
                  <div className="company-li">
                    <h3>OANDA</h3>
                    <span>Software Engineer Intern</span>
                  </div>
                </li>
                <li>
                  <div className="date-li">
                    <div className="date-li-wrapper">
                      <span>May 2022 - Aug 2022</span>
                    </div>
                  </div>
                  <div className="company-li">
                    <h3>View the Space</h3>
                    <span>Software Engineer Intern</span>
                  </div>
                </li>
                <li>
                  <div className="date-li">
                    <div className="date-li-wrapper">
                      <span>Sept 2021 - Dec 2021</span>
                    </div>
                  </div>
                  <div className="company-li">
                    <h3>Genesys</h3>
                    <span>Software Developer Intern</span>
                  </div>
                </li>
                <li>
                  <div className="date-li">
                    <div className="date-li-wrapper">
                      <span>Jan 2021 - Apr 2021</span>
                    </div>
                  </div>
                  <div className="company-li">
                    <h3>Communitech</h3>
                    <span>Web Developer Intern</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fact">
          <div className="fact-text">
            <h2>FOR THE LAUGHS</h2>
            <p>{joke.loading === false ? joke.data : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
