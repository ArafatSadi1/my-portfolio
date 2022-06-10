import React from "react";
import { Link } from "react-router-dom";
import myImage from "../images/myImage.jpg";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
  
const Home = () => {
  const handleResume = () => {
    const url =
      "https://drive.google.com/file/d/13hcen4FwCtF8KNv3Qh6Y6THaPH5iOvDR/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src={myImage}
            alt="myimage"
            class="max-w-sm h-96 rounded-lg shadow-2xl"
          /> */}
          <div className="flex flex-col gap-4">
            <h1 class="text-4xl font-semibold">Hi,</h1>
            <h1 class="text-4xl font-semibold">I'm Yasin Arafat</h1>
            <h1 class="text-4xl font-semibold">JR. Web Developer</h1>
            {/* <p class="py-6">
              I am a MERN stack developer with experience building websites. I
              specialize in JavaScript. I also have experience working with
              ReactJs, ExpressJs, and MongoDB. I seek a workplace where I can
              test and continuously grow my skills.
            </p> */}
            <button onClick={handleResume} class="btn btn-primary">
              Download Resume
            </button>
            <Link to="/contact" class="btn btn-outline btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
};

export default Home;
