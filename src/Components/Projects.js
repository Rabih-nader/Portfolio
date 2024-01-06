// projects.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Projects.css';

import projectImage1 from '../Assets/DUKO-trasport-inc---web.jpg';
import projectImage2 from '../Assets/2b6152154020263.Y3JvcCwzNDUxLDI3MDAsMTExOSww.png';
import projectImage3 from '../Assets/kfpb47vavqu61.jpeg';

const projectImages = [
  {
    image: projectImage1,
    link: 'https://dukotransportinc.com/',
  },
  {
    image: projectImage2,
    link: 'https://example.com/project2',
  },
  {
    image: projectImage3,
    link: 'https://example.com/project3',
  },
  // Add more images and links as needed
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,   // Display 1 slide at a time
  slidesToScroll: 2, // Scroll 1 slide at a time

  responsive: [
    {
      breakpoint: 768, // Adjust breakpoint as needed
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Projects() {
  return (
    <section id='projects'>
      <div className="slider-container">
        <h2>Projects</h2>
        <Slider {...sliderSettings}>
          {projectImages.map((project, index) => (
            <div key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className='carousel-img' src={project.image} alt={`Project ${index + 1}`} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
