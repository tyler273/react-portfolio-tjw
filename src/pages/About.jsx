import React from "react";
import profilepic from "../assets/selfie.jpeg";

export default function About() {
    return (
      <div className="about-me">
        <section className="pic-container">
          <h1>About Me</h1>
          <img className="profile-pic" src={profilepic} alt="a photo of me" />
        </section>
        <section className="text-container">
          <p>
            My name is Tyler Woods and I am new to the field of full-stack development! I was previously in health care and decided on a career change which led me to enroll in UPenn's coding bootcamp and earn my certificate of completion!
          </p>
          <p>
            I was born and raised in Philadelphia where I attended Central High School and graduated with an associate's degree from the Community College of Philadelphia.
          </p>
          <p>
            Having completing the University of Pennsylvania's full-stack bootcamp, I can confidently say that I love coding and am very eager to get into the field. Teamwork and collaboration is my strong suit and I look forward to building projects with other amazing people in tech!
          </p>
        </section>
      </div>
    );
  }