import React from "react";
import html from "../../src/images/skills/html-5.png";
import css from "../../src/images/skills/css-3 (1).png";
import js from "../../src/images/skills/java-script.png";
import reactJs from "../../src/images/skills/physics.png";
import expressJs from "../../src/images/skills/express.png";
import mongoDB from "../../src/images/skills/mongoDB.png";
import { AiOutlineLine } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="w-full bg-blue-50">
      <p className="font-serif pt-16 ml-2 flex items-center uppercase">
        <span>
          <AiOutlineLine />
        </span>
        Checkout out my
      </p>
      <h2 className="text-left text-4xl ml-8 pb-12 font-serif uppercase">Skills</h2>
      <div className="w-1/2 mx-auto pb-16 lg:w-3/5">
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-title font-semibold text-lg text-center mb-2">
              HTML
            </div>
            <div class="stat-value">
              <img src={html} alt="" style={{ width: 120, height: 90 }} />
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-semibold text-lg text-center mb-2">
              CSS
            </div>
            <div class="stat-value">
              <img src={css} alt="" style={{ width: 120, height: 90 }} />
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-semibold text-lg text-center mb-2">
              JavaScript
            </div>
            <div class="stat-value">
              <img src={js} alt="" style={{ width: 120, height: 90 }} />
            </div>
          </div>
          <div class="stat">
            <div class="stat-title font-semibold text-lg text-center mb-2">
              Reactjs
            </div>
            <div class="stat-value">
              <img src={reactJs} alt="" style={{ width: 120, height: 90 }} />
            </div>
          </div>
          <div class="stat">
            <div class="stat-title font-semibold text-lg text-center mb-2">
              Expressjs
            </div>
            <div class="stat-value">
              <img src={expressJs} alt="" style={{ width: 120, height: 90 }} />
            </div>
          </div>
          <div class="stat">
            <div class="stat-title font-semibold text-lg text-center mb-2">
              MongoDB
            </div>
            <div class="stat-value">
              <img src={mongoDB} alt="" style={{ width: 120, height: 90 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
