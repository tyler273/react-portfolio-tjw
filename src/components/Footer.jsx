import React from "react";
import "../index.css";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer>
            <a href="https://github.com/tyler273">
                <FontAwesomeIcon icon={faGithub} className="fa-3x" style={{color: "#668cff"}} />
            </a>
            <a href="https://www.linkedin.com/in/tyler-woods273/">
                <FontAwesomeIcon icon={faLinkedin} className="fa-3x" style={{color: "#668cff"}} />
            </a>
            <a href="https://stackexchange.com/users/29368411/tyler273">
                <FontAwesomeIcon icon={faStackOverflow} className="fa-3x" style={{color: "#668cff"}} />
            </a>
        </footer>
    );
}

export default Footer;
