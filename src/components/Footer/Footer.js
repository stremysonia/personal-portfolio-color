import React from 'react';
import './Footer.css';
import 'boxicons'

const Footer = () => {
        return (
                <footer>
                        <div className="footer-container">
                                <div className="copy-rights">All Rights Reserved. Copyright © 2020 Sonia St.Remy</div>
                                        <p>
                                                <a target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.linkedin.com/in/sonia-st-remy'>
                                                                <box-icon class='icon' type='logo' name='linkedin' size='sm' animation='tada-hover' color='blue'></box-icon>
                                                </a>
                                        </p>
                                                <p>
                                                        <a target='_blank' 
                                                                rel='noopener noreferrer'
                                                                href='https://github.com/stremysonia'>
                                                                        <box-icon class='icon' name='github' type='logo' size='sm' animation='tada-hover' color='black'></box-icon>
                                                        </a>
                                                </p>
                                                       <p>
                                                                <a target='_blank'
                                                                        rel='noopener noreferrer'
                                                                        href='https://twitter.com/SoniaStRemy1'>
                                                                               <box-icon class='icon' name='twitter' type='logo' size='sm' animation='tada-hover' color='#52c3d3'></box-icon>
                                                                </a>
                                                       </p>
                        </div>
                </footer>
        );
}
export default Footer;