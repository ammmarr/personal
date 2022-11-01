import React from "react";
import ProjectComponent from "./ProjectComponent";
import FindMe from "./FindMe";
import markdownImg from "/assets/markdownImg.png";
import budgetCalculator from "/assets/budgetCalculator.png";
import weatherImg from "/assets/weatherSnippet.png";
import todoListImg from "/assets/todoListImg.png";

export default function Projects() {
  const projectsData = [
    {
      imageUrl: markdownImg,
      name: "Markdown previewer",
      gitHub: "https://github.com/ammmarr/markdown",
      Live: "https://ammmarr.github.io/markdown/",
      key: Math.floor(Math.random() * 1000000),
    },
    {
      imageUrl: budgetCalculator,
      name: "Budget Calculator",
      gitHub: "https://github.com/ammmarr/Budget-calculator",
      Live: "https://ammmarr.github.io/Budget-calculator/",
      key: Math.floor(Math.random() * 1000000),
    },
    {
      imageUrl: weatherImg,
      name: "Weather Finder",
      gitHub: "https://github.com/ammmarr/weather-app",
      Live: "https://ammmarr.github.io/todo-app/",
      key: Math.floor(Math.random() * 1000000),
    },
    {
      imageUrl: todoListImg,
      name: "Todo List",
      gitHub: "https://github.com/ammmarr/todo-app",
      Live: "https://ammmarr.github.io/todo-app/",
      key: Math.floor(Math.random() * 1000000),
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h1>PROJECTS</h1>

      <span className="thin-line"></span>
      <div className="projects-component-container">
        {projectsData.map((comp) => (
          <ProjectComponent
            id={comp.key}
            imageUrl={comp.imageUrl}
            name={comp.name}
            key={comp.key}
            live={comp.Live}
            gh={comp.gitHub}
          />
        ))}
      </div>
    </div>
  );
}
