import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Projects.css';

import projectImage1 from '../Assets/7b1f7e6f57bd1d7652f546450b2808c5dd6ecc00-1024x504.webp';
import projectImage2 from '../Assets/2b6152154020263.Y3JvcCwzNDUxLDI3MDAsMTExOSww.png';
import projectImage3 from '../Assets/kfpb47vavqu61.jpeg';
import projectImage4 from '../Assets/portfolio_thumbnails_mock_up_sm.webp';
import projectImage5 from '../Assets/Screenshot-2021-10-11-at-12.11.56.png';
import projectImage6 from '../Assets/Screenshot-2021-12-06-at-11.30.03.png';

const projectImages = [
  {
    image: projectImage1,
    link: 'https://example.com/project1',
  },
  {
    image: projectImage2,
    link: 'https://example.com/project2',
  },
  {
    image: projectImage3,
    link: 'https://example.com/project3',
  },
  {
    image: projectImage4,
    link: 'https://example.com/project4',
  },
  {
    image: projectImage5,
    link: 'https://example.com/project5',
  },
  {
    image: projectImage6,
    link: 'https://example.com/project6',
  },
  // Add more images and links as needed
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,   // Display 3 slides at a time
  slidesToScroll: 2, // Scroll 3 slides at a time
};

function Projects() {
  return (
    <section style={{marginTop:'100px'}} id='projects'>
      

      <div className="slider-container" >
      <h2 style={{paddingTop:'15px'}}>Projects</h2>
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
