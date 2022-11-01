import React from "react";
import { useState, useEffect } from "react";
import htmlpng from "../assets/html (2).png"
import csspng from "../assets/css.png"
import javascriptpng from "../assets/javascript (1).png"
export default function Skills() {
  const [offsetY, setOffsetY] = useState(0);

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const handleScroll = (e) => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRatio = offsetY / scrollable;

  return (
    <div
      className="skills-section "
      id="skills"
      style={{ transform: `translateY(${offsetY * -0.57}px)` }}
    >
      <h1>SKILLS AND LANGUAGES</h1>
      <span className="thin-line"></span>
      <div className="skills-container">
        <div className="skill-card">
          <img src={htmlpng} alt="html image"></img>
        </div>
        <div className="skill-card">
          <img src="src\assets\css.png"></img>
        </div>
        <div className="skill-card">
          <img src="src\assets\javascript (1).png"></img>
        </div>
        <div className="skill-card">
          <img src="src\assets\atom.png"></img>
        </div>
      </div>
      <p>
        The learning process has no end. I am currenlty studying and practicing
        C++,Tail Wind,Bootstrap
      </p>
    </div>
  );
}
