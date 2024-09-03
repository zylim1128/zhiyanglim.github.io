import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText } from "@mui/material";

const experience = [
  {
    time: "June 2023 - Present",
    title: "Undergraduate Teaching Assistant - Paul G. Allen School of Computer Science and Engineering",
    description: [
      "Led comprehensive review sessions during office hours, addressing questions from problem sets for over 50 students weekly for 4 quarters",
    ],
    skills: [],
    link: "https://courses.cs.washington.edu/courses/cse312/24su/staff/",
  },
  {
    time: "Jan 2024 - June 2024",
    title: "Undergraduate Researcher - Security and Privacy Lab UW",
    description: [
      "Research Project: Investigating Security and Privacy Practices in Childcare Apps.",
    ],
    skills: [],
    link: "https://seclab.cs.washington.edu/",
  },
  {
    time: "July 2023 - August 2023",
    title: "Software Engineering Intern - Spark Internship Program",
    description: [
      "Developed a dynamic website from ground up using React, AWS Amplify, and GraphQL within a 5-week timeframe.",
    ],
    skills: [],
    link: "https://github.com/jamestlee513/spark-intership-website",
  },
  {
    time: "June 2023 - June 2023",
    title: "Peer Adviser - UW CIRCLE",
    description: [
      "Connected international undergraduates with campus resources. Provided 1-to-1 consulting services to students with difficulties. Organized fun activities to enhance cultural understanding, as well as social aspects of being a college student in the U.S.",
    ],
    skills: [],
    link: "https://www.washington.edu/circle/",
  },
];

function Experience() {
  return (
    <section className="projects section" id="experience">
    <Box
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        my: 5,
      }}
      component="section"
    >
      {experience.map((item) => (
        <Box key={item.title}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="subtitle1">{item.time}</Typography>
          <Typography variant="body1">
            {item.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </Typography>
          <List>
            {item.skills.map((skill, index) => (
              <ListItem key={index}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </Link>
        </Box>
      ))}
    </Box>
    </section>
  );
}

export default Experience;
