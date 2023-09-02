import React from "react";

import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, ButtonGroup, Link } from "@mui/material";

const data = [
  {
    link: "mailto:zylim@uw.edu",
    icon: <MailIcon />,
  },
  {
    link: "https://www.linkedin.com/in/lim-zhiyang/",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://github.com/zylim1128",
    icon: <GitHubIcon />,
  },
  {
    link: "",
    icon: <ArticleIcon />,
  },
];

function Contact() {
  return (
    <ButtonGroup variant="outlined">
      {data.map((d) => {
        return (
          <Link
            href={d.link}
            key={d.link}
            target={d.link.startsWith("https") ? "_blank" : "_self"}
          >
            <IconButton
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {d.icon}
            </IconButton>
          </Link>
        );
      })}
    </ButtonGroup>
  );
}

export default Contact;