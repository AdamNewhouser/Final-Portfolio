import React, { Component } from "react";
import QuizApp from "../../images/space-quiz-project.png";
import manageLazily from "../../images/manageLazily.png"
import firebase from "../../images/firebase.png"
import spacerepetition from '../../images/spaced-repetition.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <a name="projects" href="http://localhost:3000#projects">
          <p className='projects_anchor_content'>projects</p>
        </a>
        <div className='Projects__content'>
          <h3 className="Projects__title">Projects</h3>
          <div className="App__item">
            <h4 className="App__item_title">manageLazily</h4>
            <img
              className="App__item_image"
              src={manageLazily}
              alt="manageLazily App screenshot"
            ></img>
            <p className="description">
              A project management app. Helps small businesses overcome the issue of a lack of quality, non-enterprise management software by providing a clean, easy to use interface to manage multiple projects across the business. 
            </p>
            <ul className="techs">
              <li className="tech">
                <FontAwesomeIcon icon={faJsSquare} size='2x'/>
                </li>
                <li className="tech">
                <FontAwesomeIcon icon={faReact} size='2x'/>
                </li>
                <li className="tech">
                <img className='firebase_icon' src={firebase} alt='firebase icon'></img>
                </li>
            </ul>
            <div className="App__item_links">
              <a
                className="App__item_link live"
                href="https://managelazily.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="App__item_link repo"
                href="https://github.com/balayaydemir/Capstone-Group3-Client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="App__item">
            <h4 className="App__item_title">Spaced Repetition</h4>
            <img
              className="App__item_image"
              src={spacerepetition}
              alt="manageLazily App screenshot"
            ></img>
            <p className="description">
              A project management app. Helps small businesses overcome the issue of a lack of quality, non-enterprise management software by providing a clean, easy to use interface to manage multiple projects across the business. 
            </p>
            <ul className="techs">
              <li className="tech">
                <FontAwesomeIcon icon={faJsSquare} size='2x'/>
                </li>
                <li className="tech">
                <FontAwesomeIcon icon={faReact} size='2x'/>
                </li>
                <li className="tech">
                <FontAwesomeIcon icon={faNodeJs} size='2x'/>
                </li>
            </ul>
            <div className="App__item_links">
              <a
                className="App__item_link live"
                href="https://spaced-repetition-aedan-adam.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                class="App__item_link repo"
                href="https://github.com/thinkful-ei-heron/Aedan-Adam_spaced-repetition-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="App__item">
            <h4 className="App__item_title">Space Quiz</h4>
            <img
              className="App__item_image"
              src={QuizApp}
              alt="Space Quiz App screenshot"
            ></img>
            <p className="description">
              A quiz structured as a series of basic questions and responses that demonstrate my
              ability to understand user flow, navigate the user through
              different page views, give feedback to the user based on input
              received, and give the user a final score based on the combined
              result of each question.
            </p>
            <ul className="techs">
              <li className="tech">
                <FontAwesomeIcon icon={faJsSquare} size='2x'/>
              </li>
            </ul>
            <div className="App__item_links">
              <a
                className="App__item_link live"
                href="https://thinkful-ei-heron.github.io/Zac-and-Adam_Quiz-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                class="App__item_link repo"
                href="https://github.com/thinkful-ei-heron/Zac-and-Adam_Quiz-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
