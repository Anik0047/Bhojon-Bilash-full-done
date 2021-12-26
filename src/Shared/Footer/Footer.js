import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Bhojon Bilash</h3>
            <p>Eat Healthy Stay Healthy</p>
            <FontAwesomeIcon className='icon' icon={faYoutube}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon' icon={faFacebook}></FontAwesomeIcon>
        </div>
    );
};

export default Footer;



