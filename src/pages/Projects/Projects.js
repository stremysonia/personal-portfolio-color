// import boxicons from 'boxicons';
import React from 'react';
import './Projects.css';
import 'boxicons'
import findpeace from '../../assets/findpeace.png'
import wyneats from '../../assets/wyneats.png'
import ratemymd from '../../assets/ratemymd.png'
   
const Projects = () => {
            return (
                    <>
                        <div className="card"> 
                            <div className="card-container">
                                <div className="front-side">
                                    <div className="shapes">
                                        <div className="card-small-triangle"></div>
                                        <div className="card-triangle"></div>
                                        <div className="card-right-triangle"></div>
                                        <div className="card-large-circle"></div>
                                    </div>
                                </div>
                                <div className="backside">
                                <div className="card-title">Ratemymd</div>
                                <div className="card-summary">
                                    RATEMYMD.COM is a web application developed to give a voice 
                                    to the voiceless. With this app visitors are able to comment 
                                    and rate their hospital, doctors and nurses be it positive or 
                                    negative mistreatment by hospital staff. This app uses HTML, 
                                    CSS, JavaScript and React. The app will use the Yelp Api to 
                                    retrieve the most up to date information about the doctors, 
                                    nurses and hospitals in the Florida area.
                                <div className="card-icons">
                                    <i target="_blank"
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="project-icons">
                                            <box-icon name='code-alt' 
                                                        size="sm" 
                                                        animation="burst-hover" 
                                                        color="gray">
                                            </box-icon>
                                    </i>
                                    <i target="_blank" 
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="project-icons">
                                            <box-icon name='laptop'
                                                        size="sm"
                                                        animation="burst-hover"
                                                        color="gray">
                                            </box-icon>
                                    </i>
                                    <i target="_blank" 
                                        rel="noopener noreferrer"
                                        href={ratemymd}
                                        className="project_icons">
                                            <box-icon name='image'
                                                        size="sm"
                                                        animation="burst-hover"
                                                        color="gray">
                                            </box-icon>
                                    </i>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-container">
                                <div className="front-side">
                                    <div className="shapes">
                                        <div className="card-small-triangle"></div>
                                        <div className="card-triangle"></div>
                                        <div className="card-right-triangle"></div>
                                        <div className="card-large-circle"></div>
                                    </div>
                                <div className="backside">
                                <div className="card-title">FindPeace</div>
                                <div className="card-summary">
                                    FindPeace is an application that gives users the ability 
                                    to find resources when they are at their most vulnerable. 
                                    This app was created using HTML, Pure CSS, CSS, JavaScript, 
                                    and React on Rails. The database of resources was created 
                                    by the team because we could not find a database that suited 
                                    our needs. Mapbox GL with a token key was used to create a map 
                                    that would give the user direction to the resource center 
                                    of their choosing. An escape button was created when selected 
                                    would direct the user to a google search for yoga.
                                    <div className="card-icons">
                                        <i target="_blank"
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="project-icons">
                                                <box-icon name='code-alt' 
                                                            size="sm" 
                                                            animation="burst-hover" 
                                                            color="gray">
                                                </box-icon>
                                        </i>
                                        <i target="_blank" 
                                            rel="noopener noreferrer"
                                            href="https://find-peace.herokuapp.com/"
                                            className="project-icons">
                                                <box-icon name='laptop'
                                                            size="sm"
                                                            animation="burst-hover"
                                                            color="gray">
                                                </box-icon>
                                        </i>
                                        <i target="_blank" 
                                            rel="noopener noreferrer"
                                            href={findpeace}
                                            className="project_icons">
                                                <box-icon name='image'
                                                            size="sm"
                                                            animation="burst-hover"
                                                            color="gray">
                                                </box-icon>
                                        </i>
                                    </div>
                            </div>
                            </div>
                            </div>
                        </div>
                            <div className="card-container">
                                <div className="front-side">
                                    <div className="shapes">
                                        <div className="card-small-triangle"></div>
                                        <div className="card-triangle"></div>
                                        <div className="card-right-triangle"></div>
                                        <div className="card-large-circle"></div>
                                    </div>
                                <div className="backside">
                                <div className="card-title">Wyneats</div>
                                <div className="card-summary">
                                    WynEats is an application designed to give the people of 
                                    Wynwood a quick and engaging way to find places to eat 
                                    nearby. The app is calling Yelp's API for past reviews 
                                    and information on a clean and simple UI that allows the 
                                    user to favorite their most loved restaurants as well as 
                                    pick a random restuarant when picking is just too hard.
                                <div className="card-icons">
                                    <i target="_blank"
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="project-icons">
                                            <box-icon name='code-alt' 
                                                        size="sm" 
                                                        animation="burst-hover" 
                                                        color="gray">
                                            </box-icon>
                                    </i>
                                    <i target="_blank" 
                                        rel="noopener noreferrer"
                                        href="https://wyneats1.herokuapp.com/"
                                        className="project-icons">
                                            <box-icon name='laptop'
                                                        size="sm"
                                                        animation="burst-hover"
                                                        color="gray">
                                            </box-icon>
                                    </i>
                                    <i target="_blank" 
                                        rel="noopener noreferrer"
                                        href={wyneats}
                                        className="project_icons">
                                            <box-icon name='image'
                                                        size="sm"
                                                        animation="burst-hover"
                                                        color="gray">
                                            </box-icon>
                                    </i>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </>
            
        );
}
export default Projects;