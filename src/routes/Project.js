import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, picture, name, about } = project;
  return (
    <div class="card card-compact bg-base-100 shadow-xl rounded-tr-none rounded-bl-none">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{about}</p>
        <div class="card-actions justify-end">
          <Link
            to={`/projectDetails/${_id}`}
            class="btn btn-primary rounded-tr-none rounded-bl-none"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
