import React from "react";
import { Box } from "@mui/material";


import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Website is currently under construction!</h1>
      </div>
      <main>
        <About />
        <Contact />
        <Project />
      </main>
    </>
  );
}

export default App;
