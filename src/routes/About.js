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
            <h1 class="text-4xl">Hello again,</h1>
            <p class="py-4">
              As you already know I am Yasin Arafat from Barisal, Bangladesh.
              Experienced with MERN Stack. My academic background is
              non-technical but still, I take my career as a Web Developer
              because of my interest and curiosity. I always ensure my skills
              are kept up to date within this rapidly changing industry. Within
              the next three years, I want to see myself as a Senior Software
              Engineer. Right now seeking an opportunity to start my career and
              be part of your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
