import React from "react";
import "../index.css";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer>
            <a href="https://github.com/tyler273">
            <FontAwesomeIcon icon={faGithub} style={{color: "#668cff"}} />
            </a>
            <a href="https://www.linkedin.com/in/tyler-woods273/">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#668cff"}} />
            </a>
        </footer>
    );
}

export default Footer;
