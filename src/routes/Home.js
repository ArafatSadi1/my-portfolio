import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  const handleResume = () => {
    const url =
      "https://drive.google.com/file/d/1_7NL2U22fEhkRi6uGcpZw3NRfUOrOgI7/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl">Hello,</h1>
          <h1 className="text-4xl mt-2">
            I'm <span className="text-blue-600 font-serif">Yasin Arafat</span>
          </h1>
          <p className="w-3/6 mx-auto my-3 text-lg">
            A multidisciplinary developer and designer (sometimes) with a
            passion for creating engaging, entertaining user experiences.
          </p>
          <button onClick={handleResume} class="btn btn-primary rounded-tr-none rounded-bl-none">
          Download Resume
        </button>
        <Link to="/contact" className="btn btn-outline btn-secondary ml-3 rounded-tr-none rounded-bl-none">Contact</Link>
        </div>
      </div>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
