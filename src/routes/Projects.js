import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("/myProjects/allProjects.json")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  return (
    <div className="py-8 bg-blue-50">
      <h2 className="text-center text-4xl mb-12 font-bold">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 pl-12 lg:pl-8">
        {allProjects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;