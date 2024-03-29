import React, { useEffect, useState } from "react";
import Project from "./Project";
import { AiOutlineLine } from "react-icons/ai";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-2bzp.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  return (
    <div className="pb-16 bg-blue-50 min-h-screen">
      <p className="font-serif pt-16 ml-2 flex items-center uppercase">
        <span>
          <AiOutlineLine />
        </span>
        Take a look at my
      </p>
      <h2 className="text-left text-4xl ml-8 pb-16 font-serif uppercase">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {allProjects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
