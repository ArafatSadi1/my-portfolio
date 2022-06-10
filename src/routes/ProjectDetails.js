import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/project/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  const handleLiveWebsite = (url) => {
    window.open(url, "_blank");
  };
  const handleGithubClient = (url) => {
    window.open(url, "_blank");
  };
  const handleGithubServer = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div class="card lg:card-side shadow-xl m-8 bg-blue-50">
      <figure className="lg:w-4/5 w-full lg:h-[100vh] h-[50vh] mr-auto">
        <div class="carousel h-full">
          <div id="slide1" class="carousel-item relative w-full">
            <img src={product.screenshot1} alt="" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src={product.screenshot2} alt="" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img src={product.screenshot3} alt="" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </figure>
      <div class="p-6 w-full lg:w-1/2">
        <h2 class="card-title text-3xl font-bold">{product.name}</h2>
        <p className="mt-4">
          <span className="font-bold">Project Description:</span>{" "}
          {product.about}
        </p>
        <h3 className="my-4">
          <span className="font-bold">Technology Used:</span>{" "}
          {product.technology}
        </h3>
        <div className="flex flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => handleLiveWebsite(product.liveLink)}
            class="btn btn-outline btn-primary"
          >
            Live
          </button>
          <button
            onClick={() => handleGithubClient(product.githubClient)}
            class="btn btn-outline btn-primary"
          >
            Github Client
          </button>
          <button
            onClick={() => handleGithubServer(product.githubServer)}
            class="btn btn-outline btn-primary"
          >
            Github Server
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
