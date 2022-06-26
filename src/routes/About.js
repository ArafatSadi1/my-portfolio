import React from "react";
import myImage from ".././images/my-img.png";
import { AiOutlineLine } from "react-icons/ai";


const About = () => {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <p className="font-serif pt-16 ml-2 flex items-center uppercase">
        <span>
          <AiOutlineLine />
        </span>
        Some info
      </p>
      <h2 className="text-left text-4xl ml-8 pb-12 font-serif uppercase">
        About me
      </h2>
      <div class="hero lg:px-12 px-0">
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
            <h1 class="text-4xl font-semibold">Hello again</h1>
            <h1 class="text-4xl font-semibold my-2">
              I'm <span className="text-blue-600">Yasin Arafat</span>
            </h1>
            <p class="py-4">
              I am a MERN stack developer with experience building websites. I
              specialize in JavaScript. I also have experience working with
              ReactJs, ExpressJs, and MongoDB. I seek a workplace where I can
              test and continuously grow my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
