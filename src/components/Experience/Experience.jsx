import React from "react";
import "./experience.css";

const experience = [
  {
    time: "June 2023 - Present",
    title: "Undergraduate Teaching Assistant",
    company: "Paul G. Allen School of Computer Science and Engineering",
    description: [
      "Led comprehensive review sessions during office hours, addressing questions from problem sets for over 50 students weekly for 4 quarters",
    ],
    link: "https://courses.cs.washington.edu/courses/cse312/24su/staff/",
  },
  {
    time: "Jan 2024 - June 2024",
    title: "Undergraduate Researcher",
    company: "Security and Privacy Lab UW",
    description: [
      "Research Project: Investigating Security and Privacy Practices in Childcare Apps.",
    ],
    link: "https://seclab.cs.washington.edu/",
  },
  {
    time: "July 2023 - August 2023",
    title: "Software Engineering Intern",
    company: "Spark Internship Program",
    description: [
      "Developed a dynamic website from ground up using React, AWS Amplify, and GraphQL within a 5-week timeframe.",
    ],
    link: "https://github.com/jamestlee513/spark-intership-website",
  },
  {
    time: "June 2023",
    title: "Peer Adviser",
    company: "UW CIRCLE",
    description: [
      "Connected international undergraduates with campus resources. Provided 1-to-1 consulting services to students with difficulties. Organized fun activities to enhance cultural understanding, as well as social aspects of being a college student in the U.S.",
    ],
    link: "https://www.washington.edu/circle/",
  },
];

function Experience() {
  return (
    <section id="experiences" className="experience-section">
      <h2 className="section__title">Experience</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{item.title}</h3>
              <span className="experience-company">{item.company}</span>
              <span className="experience-time">{item.time}</span>
            </div>
            <ul className="experience-description">
              {item.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="experience-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;