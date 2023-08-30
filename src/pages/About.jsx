import React from "react";
import profilepic from "../assets/selfie.jpeg";

export default function About() {
    return (
      <div>
        <h1>About Me</h1>
        <div className="pic-container"><img className="profile-pic" src={profilepic} alt="a photo of me" /></div>
        <p>
        My name is Tyler Woods and I am new to the field of full-stack development! I was previously in health care and decided on a career change which led me to enroll in UPenn's coding bootcamp. I was born and raised in Philadelphia where I attended CHS and graduated with an associate's degree from the Community College of Philadelphia. This website will be updated as I learn more and improve my skills in both HTML, CSS and JavaScript!
        </p>
      </div>
    );
  }