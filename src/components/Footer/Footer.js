import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

const Footer = () => {
        return (
                <>
                        <div className="footer-container">
                                <span className="footer-copyright rights">All Rights Reserved. Copyright © 2020 Sonia St.Remy</span>
                                        <p>
                                                <a target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https.//www.linkedin.com/in/sonia-st-remy/'>
                                                                <FontAwesomeIcon
                                                                icon={['fab', 'linkedin']} 
                                                                className="footer-linkedin-in icons"/>
                                                </a>
                                        </p>
                                                <p>
                                                        <a target='_blank'
                                                                rel='noopener noreferrer'
                                                                href='https://github.com/stremysonia'>
                                                                        <FontAwesomeIcon
                                                                        icon={['fab', 'github-square']} 
                                                                        className="footer-github icons"/>
                                                        </a>
                                                </p>
                                                       <p>
                                                                <a target='_blank'
                                                                        rel='noopener noreferrer'
                                                                        href='https://twitter.com/SoniaStRemy1'>
                                                                                <FontAwesomeIcon 
                                                                                icon={['fab', 'twitter']} 
                                                                                className="footer-twitter icons"/>
                                                                </a>
                                                        </p>
                        </div>
                </>
        );
}
export default Footer;