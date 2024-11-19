import React from "react";
import "./Hero.css";
import heroImage from "../Assets/Hero.jpg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="vertical-text">
          <p>Collections</p>
          <p>for</p>
          <p>Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <button>Latest</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
