import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ProjectSection.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import assets
import Project1_1 from "../assets/Divya's Residence/15.jpg";
import Project1_2 from "../assets/Divya's Residence/13.jpg";
import Project1_3 from "../assets/Divya's Residence/12.jpg";
import Project1_4 from "../assets/Divya's Residence/11.jpg";
import Project1_5 from "../assets/Divya's Residence/10.jpg";
import Project1_6 from "../assets/Divya's Residence/9.jpg";
import Project1_7 from "../assets/Divya's Residence/8.jpg";
import Project1_8 from "../assets/Divya's Residence/7.jpg";
import Project1_9 from "../assets/Divya's Residence/6.jpg";
import Project1_10 from "../assets/Divya's Residence/5.jpg";
import Project1_11 from "../assets/Divya's Residence/4.jpg";
import Project1_12 from "../assets/Divya's Residence/3.jpg";
import Project1_13 from "../assets/Divya's Residence/2.jpg";
import Project1_14 from "../assets/Divya's Residence/1.jpg";

import Project2_1 from "../assets/Abinaya's Residence/1.jpg";
import Project2_2 from "../assets/Abinaya's Residence/2.jpg";
import Project2_3 from "../assets/Abinaya's Residence/3.jpg";
import Project2_4 from "../assets/Abinaya's Residence/4.jpg";
import Project2_5 from "../assets/Abinaya's Residence/5.jpg";
import Project2_6 from "../assets/Abinaya's Residence/6.jpg";
import Project2_7 from "../assets/Abinaya's Residence/7.jpg";
import Project2_8 from "../assets/Abinaya's Residence/8.jpg";
import Project2_9 from "../assets/Abinaya's Residence/9.jpg";
import Project2_10 from "../assets/Abinaya's Residence/10.jpg";
import Project2_11 from "../assets/Abinaya's Residence/11.jpg";

import Project3_1 from "../assets/Nirmala's Residence/1.jpg";
import Project3_2 from "../assets/Nirmala's Residence/8.jpg";
import Project3_3 from "../assets/Nirmala's Residence/2.jpg";
import Project3_4 from "../assets/Nirmala's Residence/3.jpg";
import Project3_5 from "../assets/Nirmala's Residence/4.jpg";
import Project3_6 from "../assets/Nirmala's Residence/5.jpg";
import Project3_7 from "../assets/Nirmala's Residence/6.jpg";
import Project3_8 from "../assets/Nirmala's Residence/7.jpg";
import Project3_9 from "../assets/Nirmala's Residence/8.jpg";

import Project4_1 from "../assets/Saravanan's Residence/1-1.png";
import Project4_1_1 from "../assets/Saravanan's Residence/1-2.jpg";
import Project4_2 from "../assets/Saravanan's Residence/2.jpg";
import Project4_3 from "../assets/Saravanan's Residence/3.jpg";
import Project4_4 from "../assets/Saravanan's Residence/4.jpg";
import Project4_5 from "../assets/Saravanan's Residence/5.jpg";
import Project4_6 from "../assets/Saravanan's Residence/6.jpg";
import Project4_7 from "../assets/Saravanan's Residence/7.jpg";
import Project4_8 from "../assets/Saravanan's Residence/8.png";
import Project4_9 from "../assets/Saravanan's Residence/9.png";
import Project4_10 from "../assets/Saravanan's Residence/10.png";
import Project4_11 from "../assets/Saravanan's Residence/11.png";
import Project4_12 from "../assets/Saravanan's Residence/12.png";
import Project4_13 from "../assets/Saravanan's Residence/13.png";
import Project4_14 from "../assets/Saravanan's Residence/14.png";
import Project4_15 from "../assets/Saravanan's Residence/15.png";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Divya's Residence",
    images: [
      Project1_1,
      Project1_2,
      Project1_3,
      Project1_4,
      Project1_5,
      Project1_6,
      Project1_7,
      Project1_8,
      Project1_9,
      Project1_10,
      Project1_11,
      Project1_12,
      Project1_13,
      Project1_14,
    ],
  },
  {
    id: 2,
    title: "Abinaya's Residence",
    images: [
      Project2_1,
      Project2_2,
      Project2_3,
      Project2_4,
      Project2_5,
      Project2_6,
      Project2_7,
      Project2_8,
      Project2_9,
      Project2_10,
      Project2_11,
    ],
  },
  {
    id: 3,
    title: "Nirmala's Residence",
    images: [
      Project3_1,
      Project3_2,
      Project3_3,
      Project3_4,
      Project3_5,
      Project3_6,
      Project3_7,
      Project3_8,
      Project3_9,
    ],
  },
  {
    id: 4,
    title: "Saravanan's Residence",
    images: [
      Project4_1,
      Project4_2,
      Project4_3,
      Project4_4,
      Project4_5,
      Project4_6,
      Project4_7,
      Project4_8,
      Project4_9,
      Project4_10,
      Project4_11,
      Project4_12,
      Project4_13,
      Project4_14,
      Project4_15,
    ],
  },
];

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openLightbox = (projectId) => {
    setActiveProject(projects.find((project) => project.id === projectId));
  };

  const closeLightbox = () => {
    setActiveProject(null);
  };

  return (
    <>
      <div
        className={`project-section ${activeProject ? "blurred" : ""}`}
        id="projects"
      >
        <h2 className="project-heading">Our Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-preview"
                onClick={() => openLightbox(project.id)}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} Preview`}
                  className="project-thumbnail"
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="close-button" onClick={closeLightbox}>
              &#10005;
            </button>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              navigation
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 4,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper-container"
            >
              {activeProject.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${activeProject.title} Slide ${index}`}
                    className="swiper-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSection;
