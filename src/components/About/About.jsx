import React from 'react';
import "./about.css";
// import Info from './Info';
import Project from "../Project/Project"
import Experience from '../Experience/Experience';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">

        <div className="about__data">
          <p className="about__description">
            Currently working as a teaching assistant and previously a research assistant under Prof. Franzi Roesner at the Security and Privacy Lab, I am deeply interested in AI/ML and software development.
          </p>

          <p className="about__description">
            I'm excited to share a collection of projects that reflect both my academic journey and personal exploration. These include my past hackathon projects, other contributions, and an ongoing UW CIRCLE web app that is set to launch in mid-July.
          </p>

          <p className="about__description">
            In addition to my technical work, I run a YouTube channel where I solve Leetcode questions and provide explanations to help beginners improve their problem-solving skills.
          </p>
        </div>
        <h2 className="section__title">Experience</h2>
        <Experience />
        <h2 className="section__title">Projects</h2>
        <Project />
        
      </div>
    </section>
  )
}

export default About