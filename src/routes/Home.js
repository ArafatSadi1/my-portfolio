import React from "react";
import myImage from "../images/my-img.png";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const handleResume = () => {
    const url =
      "https://drive.google.com/file/d/13hcen4FwCtF8KNv3Qh6Y6THaPH5iOvDR/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      <div class="hero min-h-screen lg:px-12 px-0">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="avatar">
            <div class="w-88 lg:w-96 mask mask-squircle">
              <img
                src={myImage}
                alt="myimage"
                class="w-full h-96 rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-3/5 w-full lg:mr-32 mr-0">
            <h1 class="text-4xl font-semibold">Hey,</h1>
            <h1 class="text-4xl font-semibold my-2">I'm Yasin Arafat</h1>
            <h1 class="text-4xl font-semibold">JR. React Developer</h1>
            <p class="py-6">
              I am a MERN stack developer with experience building websites. I
              specialize in JavaScript. I also have experience working with
              ReactJs, ExpressJs, and MongoDB. I seek a workplace where I can
              test and continuously grow my skills.
            </p>
            <button onClick={handleResume} class="btn btn-primary">
              Download Resume
            </button>
            <button class="btn btn-outline btn-secondary ml-3">Contact</button>
          </div>
        </div>
      </div>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
