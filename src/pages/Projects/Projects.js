import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLaptop, faCode } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import findpeace from '../../assets/findpeace.png'
import wyneats from '../../assets/wwyneats.png'

library.add( faClock, 
    faLaptop, 
    faCode );


const Projects = () => {
        return (
            <>
                <div className="project-container">
                    <div className="image-container">
                        <div className="project-image">
                            <img src={findpeace} alt="FindPeace Main Page" width="450px" height="450"></img>
                        </div>
                    </div>
                        <div className="project-right-side">
                            <div className="project-title">
                                <h1>FindPeace</h1>
                                        <div className="project-separator"></div>
                                            <p className="project-summary">
                                                FindPeace is an app that gives users the ability 
                                                to find resources when they are at their most 
                                                vulnerable. This app is only known through word 
                                                of mouth by the medical and mental health community 
                                                to help adults, children and families that find 
                                                themselves in an unsafe environment due to sexual, 
                                                physical, mental and verbal abuse. This will also 
                                                assist user who are seeking HIV testing or treatment, 
                                                emergency housing and transitional housing. 
                                            </p>
                                                <div className="project-footer">
                                                    {/* <span>
                                                        <a target='_blank'
                                                            rel='noopener noreferrer'
                                                            button='#'>
                                                                <FontAwesomeIcon
                                                                icon={['far', 'clock']}
                                                                className="project-sprint footer"/>
                                                                    <div className="footer-links">Sprint</div>
                                                        </a>
                                                    </span> */}
                                                        <span>
                                                            <a target='_blank'
                                                                rel='noopener noreferrer'
                                                                href='https://find-peace.herokuapp.com/'>
                                                                    <FontAwesomeIcon
                                                                    icon={['fas', 'laptop']}
                                                                    className="project-website footer"/>
                                                                        <div className="footer-links">Website</div>
                                                            </a>
                                                        </span>
                                                            <span>
                                                                <a target='_blank'
                                                                    rel='noopener noreferrer'
                                                                    href='https://github.com/wyncode/C36_find_peace'>
                                                                        <FontAwesomeIcon
                                                                        icon={['fas', 'code']}
                                                                        className="project-website footer"/>
                                                                            <div className="footer-links">Code</div>

                                                                </a>
                                                            </span>
                                                </div>
                            </div>
                        </div>
                </div> 
                        <div className="project-container">
                            <div className="image-container">
                                <div className="project-image">
                                    <img src={wyneats} alt="WynEats Main Page" width="450px" height="450"></img>
                                </div>
                            </div>
                                <div className="project-right-side">
                                    <div className="project-title">
                                        <h1>WynEats</h1>
                                            <div className="project-separator"></div>
                                                <p className="project-summary">
                                                    WynEats is an application designed to give the people of 
                                                    Wynwood a quick and engaging way to find places to eat 
                                                    nearby. The app is calling Yelp's API for past reviews 
                                                    and information on a clean and simple UI that allows the 
                                                    user to favorite their most loved restaurants as well as 
                                                    pick a random restuarant when picking is just too hard.
                                                </p>
                                                    <div className="project-footer">
                                                        {/* <span>
                                                            <a target='_blank'
                                                                rel='noopener noreferrer'
                                                                href='#'>
                                                                    <FontAwesomeIcon
                                                                    icon={['far', 'clock']}
                                                                    className="project-sprint footer"/>
                                                                        <div className="footer-links">Sprint</div>
                                                            </a>
                                                        </span> */}
                                                            <span>
                                                                <a target='_blank'
                                                                    rel='noopener noreferrer'
                                                                    href='https://wyneats1.herokuapp.com/'>
                                                                        <FontAwesomeIcon
                                                                        icon={['fas', 'laptop']}
                                                                        className="project-website footer"/>
                                                                            <div className="footer-links">Website</div>
                                                                </a>
                                                            </span>
                                                                <span>
                                                                    <a target='_blank'
                                                                        rel='noopener noreferrer'
                                                                        href='https://github.com/wyncode/C36_midterm_dean_jamile_joseph_lavonnyka_sonia'>
                                                                            <FontAwesomeIcon
                                                                            icon={['fas', 'code']}
                                                                            className="project-website footer"/>
                                                                                <div className="footer-links">Code</div>
                                                                    </a>
                                                                </span>
                                                    </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div>  */}
            </>
        );
}
export default Projects;