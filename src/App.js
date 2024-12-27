import React from "react";
import "./App.css";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Experience />
        <Project />
        <Resume />
      </main>
    </>
  );
}

export default App;
