import React, { Component } from "react";
import Picture from "../../images/adam_brady.JPG";
import "./landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing" id="landing">
        <a name="landing" href="http://localhost:3000#landing">
          <p className="landing_anchor_content">landing</p>
        </a>
        <div className="Landing__content">
          <img
            className="Landing__image"
            src={Picture}
            alt="Adam Newhouser and his dog, Brady"
          ></img>
          <h2 className="Landing__tag">Web Developer</h2>
          <h2 className="Landing__tag">Gamer</h2>
          <h2 className="Landing__tag">Dog Dad</h2>
        </div>
      </div>
    );
  }
}
