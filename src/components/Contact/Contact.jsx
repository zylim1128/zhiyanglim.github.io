import React from "react";

import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, ButtonGroup, Link, Tooltip } from "@mui/material";

const data = [
  {
    link: "mailto:zylim@uw.edu",
    icon: <MailIcon />,
    label: "Email",
  },
  {
    link: "https://www.linkedin.com/in/lim-zhiyang/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    link: "https://github.com/zylim1128",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
  {
    link: "/docs/ZhiYang-Resume.pdf",
    icon: <ArticleIcon />,
    label: "Resume",
  },
  {
    link: "https://www.youtube.com/@LeetcodeDailyGrind",
    icon: <YouTubeIcon />,
    label: "YouTube",
  },
];

function Contact() {
  return (
    <ButtonGroup orientation="vertical" variant="outlined">
       {data.map((d) => (
        <Link
          href={d.link}
          key={d.link}
          target="_blank"
        >
          <Tooltip title={d.label} placement="left">
            <IconButton
              sx={{
                "&:hover": {
                  color: "var(--title-color)",
                },
              }}
            >
              {d.icon}
            </IconButton>
          </Tooltip>
        </Link>
      ))}
    </ButtonGroup>
  );
}

export default Contact;