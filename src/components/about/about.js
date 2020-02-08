import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div className="About" id='about'>
        <a name="about" href="http://localhost:3000#about">
          <p className='about_anchor_content'>about</p>
        </a>
        <div className="About__content">
          <h3 className="About__title">About</h3>
          <p className="About__bio">
            I’m a Full-Stack Software Developer. Being 33 years old, I have an
            extensive customer service management background outside of my newly
            acquired skills in coding. While I am beyond excited to begin this
            new adventure in my new career, I am grateful for the lessons I’ve
            learned and skills I have acquired throughout my previous career. I
            pride myself on my communication skills, healthy competitive nature,
            and desire for efficiency in all aspects of my life. Outside of
            work, I am an avid gamer and enjoy absorbing all forms of media,
            especially television shows and podcasts. I like to stay active with
            a combination of gym exercising and hiking with my golden retriever,
            Brady.
          </p>
        </div>
      </div>
    );
  }
}
