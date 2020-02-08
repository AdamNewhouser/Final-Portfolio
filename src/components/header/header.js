import React, { Component } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="Header">
          <div className="Header__content">
            <Link
              className="Nav__about nav-item"
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h1 className="Header__name">Adam Newhouser</h1>
            </Link>
            <div className="Header__socials">
              <a
                className="Header__social_icon"
                href="https://github.com/AdamNewhouser/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  className="social_link"
                />
              </a>
              <a
                className="Header__social_icon"
                href="https://www.linkedin.com/in/adam-newhouser-2a1ba1120/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  className="social_link"
                />
              </a>
            </div>
            <ul className="Nav">
              <Link
                className="Nav__about nav-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                className="Nav__about nav-item"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="Nav__about nav-item"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
