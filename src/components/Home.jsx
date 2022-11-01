import React from "react";
import { useState, useEffect } from "react";
import CVpicture from "../assets/CVpicturePNG.png"

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRatio = offsetY / scrollable;

  let homePara = {
    opacity: `${Math.abs(1 - scrollRatio) * 100}%`,
    transform: `translateY(${offsetY * 0.4}px)`,
  };

  return (
    <div className="home" id="home" style={homePara}>
      <div className="left-section">
        <h1>
          Hey,I AM <span className="reveal-text">AMMAR OMAR</span>
        </h1>
        <p>
          A passionate entry level Front-end developer that you can count on.
        </p>
        <button className="button">
          <a href="Resume.pdf" download="Resume.pdf">
            RESUME
          </a>
          <div className="button__horizontal"></div>
          <div className="button__vertical"></div>
        </button>
      </div>
      <div className="right-section ">
        <img src={CVpicture}></img>
      </div>
    </div>
  );
}
