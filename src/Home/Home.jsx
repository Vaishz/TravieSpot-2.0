// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Slider from "./Slider";
import Whatsapp from "../Whatsapp";

const Home = () => {
  return (
    <>
      <div>
        <div className="main-body">
          <div className="section1">
            <div className="sec1-text">
              Discover story-worthy travel moments
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="button-text-sec2">
            <div className="sec2-text">
              PLAN YOUR TRIP
              <span>Where to next?</span>
            </div>
            <div className="button-container-sec2">
              <button>View all destinations</button>
            </div>
          </div>
        </div>

        <div className="slider-div">
          <Slider />
        </div>

        <div className="hero-image">
          <p>BEST IN TRAVEL 2024</p>
          <button>Discover the winners</button>
        </div>
      </div>
    </>
  );
};

export default Home;
