import React from "react";
import "./project.css";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const projects = [
  {
    time: "June 2024",
    title: "Detoxify | Open Source AI Hackathon #6",
    description: [
      <>Winner of the Experimental Track
      <EmojiEventsIcon /></>,
      
      "Developed an AI application using Meta Llama3 70b instruct LLM for toxicity classification in gaming chat. ",
    ],
    skills: ["Flask", "LangChain/OctoAI", "Python", "HTML/CSS"],
    link: "https://github.com/NoxNovus/Detoxify",
  },
  {
    time: "June 2023 - Present",
    title: "UW CIRCLE Web Application",
    description: [
      "Implement a mobile application that connects international students at UW with the campus resources",
    ],
    skills: ["React.js", "Figma"],
    link: "https://app.circle.uw.edu/",
  },
  {
    time: "Jan 2024 - March 2024",
    title: "Nicebreakers",
    description: [
      "Implemented a web application that collects icebreakers",
    ],
    skills: ["React", "Javascript", "Documentation"],
    link: "https://main.d3pb2yef2pgy2m.amplifyapp.com/",
  },
  {
    time: "Oct 2023",
    title: "DubWalks | DubHacks 23'",
    description: [
      "Developed a React Native MVP app to connect UW students for safe walks home, enhancing campus safety and community engagement",
    ],
    skills: ["React Native", "Javascript", "Figma"],
    link: "https://devpost.com/software/dubwalks/",
  },
  {
    time: "Oct 2022",
    title: "Aidhere | DubHacks 22'",
    description: [
      "Implement a MVP mobile application that helps people in emergency to seek help from nearby certified first responder in DubHacks",
    ],
    skills: ["Java", "Android Studio", "Google Maps", "Figma"],
    link: "https://devpost.com/software/aidhere",
  },
  {
    time: "Mar 2023 - June 2023",
    title: "333gle",
    description: [
      "Built a C/C++ search engine optimizing data retrieval with hash tables, prioritizing security through advanced POSIX file/network I/O management.",
    ],
    skills: ["C++", "Socket programming", "HTTP", "Boost"],
    link: "https://courses.cs.washington.edu/courses/cse333/23sp/",
  },
  {
    time: "Mar 2022 - June 2022",
    title: "Campus Path",
    description: ["Built a MVC shortest-path wayfinding tool for UW school campus"],
    skills: ["Java Spring", "TypeScript", "React", "Bootstrap"],
    link: "https://courses.cs.washington.edu/courses/cse331/22sp/hw/hw9/hw-campuspaths.html",
  },
];

function Project() {
  return (
    <section id="projects" className="project-section">
      <h2 className="section__title">Projects</h2>
      <div className="project-list">
        {projects.map((item, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <h3>{item.title}</h3>
              <span className="project-time">{item.time}</span>
            </div>
            <ul className="project-description">
              {item.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <div className="project-skills">
              <h4>Skills:</h4>
              <ul>
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;