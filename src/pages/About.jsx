import React from "react";
import profilepic from "../assets/selfie.jpeg";
import "../styles/About.css";

export default function About() {
    return (
      <div className="about-me">
        <section className="pic-container">
          <h1>About Me</h1>
          <img className="profile-pic" src={profilepic} alt="a photo of me" />
        </section>
        <section className="text-container">
          <p>
            Hello there! My name is Tyler Woods and I am a Full-Stack Web Developer!
          </p>
          <p>
            I was born and raised in Philadelphia where I attended Central High School and graduated with an associate's degree from the Community College of Philadelphia. I was previously in health care and decided on a career change which led me to enroll in the University of Pennsylvania's coding bootcamp where I earned my certificate of completion for full-stack web development!
          </p>
          <p>
            Having completing the University of Pennsylvania's full-stack bootcamp, I can confidently say that I love coding and am very eager to get into the field. Teamwork, collaboration and the desire to learn more skills are my main strengths and I look forward to building projects with other amazing people in tech!
          </p>
        </section>
      </div>
    );
  }