import React from "react";
import ResumeTWoodsPDF from "../assets/twoods-resume.pdf";
import "../styles/Resume.css";

export default function Resume() {
    return (
      <>
        <div className="resume-container">
          <section className="resume-download">
            <h1>Resume</h1>
            <a href={ResumeTWoodsPDF}
              download="ResumeTwoodsPDF"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download PDF</button>
            </a>
          </section>

          <section className="resume-proficiencies">
            <div>
              <h3>Front-End Proficiencies</h3>
              <ul>
                <li className="bullet-points">HTML</li>
                <li className="bullet-points">CSS</li>
                <li className="bullet-points">JavaScript</li>
                <li className="bullet-points">React</li>
                <li className="bullet-points">Handlebars JS</li>
                <li className="bullet-points">Bootstrap</li>
              </ul>
            </div>
            <div>
              <h3>Back-End Proficiencies</h3>
              <ul>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
              </ul>
            </div>

          </section>
          

        </div>
      </>
    );
  }