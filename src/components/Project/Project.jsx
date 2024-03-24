import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText } from "@mui/material";

const project = [
  {
    time: "June 2023 - Present",
    title: "UW CIRCLE Mobile Application",
    description: [
      "Implement a mobile application that connects international students at UW with the campus resources",
    ],
    skills: ["React Native", "Figma"],
    link: "https://reenas-dynamite-site.webflow.io/circle",
  },
  {
    time: "Oct 2022",
    title: "Aidhere",
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
      "Created a toy search engine with concurrent networking and disk-backed search query processing with file crawling and indexing",
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
    <Box
      id="project"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        my: 5,
      }}
      component="section"
    >
      {project.map((item) => (
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
  );
}

export default Project;
