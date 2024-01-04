import React from 'react';
import './css/Home.css'; // Import the CSS file for styling
import image from '../Assets/istockphoto-1016761216-612x612.jpeg';
function Home() {
  return (
    <section id='home'>
      <div className="container1">
        <div className="left-div">
          <img src={image} alt="Image" />
        </div>
        <div className="right-div">
          <p>RABIH NADER <br/>
              SOFTWARE DEVELOPER
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;