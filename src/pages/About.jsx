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
            My name is Tyler Woods and I am new to the field of full-stack development! I was previously in health care and decided on a career change which led me to enroll in UPenn's coding bootcamp. I was born and raised in Philadelphia where I attended CHS and graduated with an associate's degree from the Community College of Philadelphia. This website will be updated as I learn more and improve my skills in both HTML, CSS and JavaScript!
          </p>
        </section>
      </div>
    );
  }