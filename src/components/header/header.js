import React, { Component } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="Header">
          <div className="Header__content">
            <a href="http://localhost:3000#landing">
              <h1 className="Header__name">Adam Newhouser</h1>
            </a>

            <div className="Header__socials">
              <a
                className="Header__social_icon"
                href="https://github.com/AdamNewhouser/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size='3x' className='social_link'/>
              </a>
              <a
                className="Header__social_icon"
                href="https://www.linkedin.com/in/adam-newhouser-2a1ba1120/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin}  size='3x' className='social_link'/>
              </a>
            </div>
            <ul className="Nav">
              <a href="http://localhost:3000#about">
                <li className="Nav__about nav-item">About</li>
              </a>
              <a href="http://localhost:3000#projects">
                <li className="Nav__projects nav-item">Projects</li>
              </a>
              <a href="http://localhost:3000#contact">
                <li className="Nav__contact nav-item">Contact</li>
              </a>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
