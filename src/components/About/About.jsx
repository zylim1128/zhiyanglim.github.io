import React from "react";

import { Card, CardContent, Link, Typography } from "@mui/material";

import useHover from "../hooks/useHover";

const paragraphs = [
  "Hello, I am Zhi Yang! I am a rising junior studying Computer Science at the University of Washington"
];

const highlightedWords = [
  {
    text: "University of Washington",
    link: "https://www.washington.edu/",
  }
];

const highlightParagraph = (paragraph, isHovered) => {
  let ret = paragraph;
  highlightedWords.forEach((word) => {
    ret = ret.replaceAll(word.text, `HIGHLIGHT[${JSON.stringify(word)}]`);
  });

  const outputArray = ret.split(/(HIGHLIGHT\[[^\]]+\])/).map((part) => {
    if (part.startsWith("HIGHLIGHT[")) {
      const obj = JSON.parse(part.slice(10, -1));
      return (
        <Link
          href={obj.link}
          key={obj.text}
          underline="hover"
          target="_blank"
          color={isHovered ? "primary" : "unset"}
          sx={{
            fontWeight: "bold",
            textDecorationColor: "transparent",
            transition: "400ms",
          }}
        >
          {obj.text}
        </Link>
      );
    }
    return part;
  });

  return outputArray;
};

function About() {
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useHover();

  return (
    <Card
      sx={{
        display: "flex",
        p: 4,
        flexDirection: "column",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "background.default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="about"
      component="section"
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          px: { xs: 0, md: "1rem" },
        }}
      >
        {paragraphs.map((p) => (
          <Typography variant="body1" component="div" key={p} paragraph>
            {highlightParagraph(p, isHovered)}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default About;