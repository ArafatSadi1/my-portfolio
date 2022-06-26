import React from "react";
import myImage from ".././images/my-img.png";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
  const handleLinkedIn = () => {
    const url = "https://www.linkedin.com/in/yasin-arafat-370b5b219/";
    window.open(url, "_blank");
  };
  const handleFb = () => {
    const url = "https://www.linkedin.com/in/yasin-arafat-370b5b219/";
    window.open(url, "_blank");
  };
  const handleGithub = () => {
    const url = "https://www.linkedin.com/in/yasin-arafat-370b5b219/";
    window.open(url, "_blank");
  };
  return (
    <div className="bg-zinc-100">
      <h2 className="text-left text-5xl ml-8 pt-12 font-serif">About me</h2>
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
            <h1 class="text-4xl font-semibold my-2">I'm <span className="text-blue-600">Yasin Arafat</span></h1>
            <p class="py-4">
              I am a MERN stack developer with experience building websites. I
              specialize in JavaScript. I also have experience working with
              ReactJs, ExpressJs, and MongoDB. I seek a workplace where I can
              test and continuously grow my skills.
            </p>
            <div className="flex items-center">
              <h1 class="text-3xl font-semibold my-2">Stay Touch:</h1>
              <div className="ml-4 pt-2">
                <button className="text-3xl text-blue-600" onClick={handleLinkedIn}>
                  <FaLinkedin />
                </button>
                <button className="text-3xl mx-2 text-blue-600" onClick={handleFb}>
                  <FaFacebookSquare />
                </button>
                <button className="text-3xl text-blue-600" onClick={handleGithub}>
                  <FaGithubSquare />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
