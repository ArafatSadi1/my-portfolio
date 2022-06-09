import React from "react";

const Project = ({ project }) => {
    const {picture, name, about} = project;
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl lg:mb-0 mb-8">
      <figure>
        <img
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{about}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
