// Projects.js
import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import { colors } from "react-select/dist/declarations/src/theme";
import myCustomTheme from "../../theme/Theme";

const projectImages = [
  "/assets/brackets_logo.png",
  "/assets/brackets_logo.png",
  "/assets/brackets_logo.png",
  "/assets/brackets_logo.png",
  "/assets/brackets_logo.png",
  "/assets/brackets_logo.png",
];
const Projects = () => {
  return (
    <section id="projects" className="fade-out py-12">
      <div className="max-w-7xl mx-auto px-4 py-32 sm:py-48 lg:py-56 ">
        <div className="">
          <h2 className="text-6xl font-bold text-center text-slate-300">
            Projects
          </h2>
          <div className="my-4 h-[300px] xl:h-[350px] w-full xl:w-[500px] sm:w-full ">
            {" "}
            {/* Adjust the height as needed */}
            <Carousel slide={false} theme={myCustomTheme}>
              {projectImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="h-full object-cover"
                  style={{
                    opacity: 0.9,
                    margin: "0 auto",
                  }}
                />
              ))}
            </Carousel>
          </div>
          {/* <div className="h-[300px] xl:h-[350px] w-full max-w-7xl xl:max-w-md">
            {" "}
            
            <Carousel slide={false} theme={myCustomTheme}>
              {projectImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="h-full object-cover "
                  style={{
                    opacity: 0.9,
                    margin: "0 auto",
                  }}
                />
              ))}
            </Carousel>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
