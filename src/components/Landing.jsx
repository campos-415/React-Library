import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>San Francisco Most Awarded Library</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={LandingImg} alt="" className="header__img" />
          </figure>
        </div>
      </header>
    </section>
  );
};
export default Landing;
