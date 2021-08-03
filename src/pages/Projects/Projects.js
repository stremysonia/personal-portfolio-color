import React from 'react';
import './Projects.css';
import 'boxicons'
import findpeace from '../../assets/findpeace.png'
import wyneats from '../../assets/wyneats.png'
import ratemymd from '../../assets/ratemymd.png'
   
const Projects = () => {
            return (
                    <>
                        <div className="project-container">
                            <div className="project-container-one">
                                <div className="project-title">MatchMaker</div>
                                    <div className="image-coming-soon">Image Coming Soon</div>
                                    {/* <img alt="#" className="wyneats-image"/> */}
                                        <p className="project-summary">After doing research and not finding a 
                                            database for female and male serial killers I chose to create my own. 
                                            The database consisted  of  name, date of birth, nickname, image, 
                                            proven victims, confessed victims and a brief description  of the 
                                            subject. GreenSock was used to give animation to a SVG image. Programs 
                                            used to create this project are HTML, CSS, JavaScript and React.
                                        </p>
                                            <div className="project-links">
                                                {/* <a className="links" target="_blank" rel="noopener noreferrer" href="">Live Site</a> */}
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/MVP-Marketplace/Matchmaker">Source Code</a>
                                            </div>
                            </div>
                            <div className="project-container-two">
                                <div className="project-title">Serial</div>
                                    <div className="image-coming-soon">Image Coming Soon</div>
                                    {/* <img alt="#" className="wyneats-image" src={wyneats}/> */}
                                        <p className="project-summary">After doing research and not finding a 
                                            database for female and male serial killers I chose to create my own. 
                                            The database consisted  of  name, date of birth, nickname, image, 
                                            proven victims, confessed victims and a brief description  of the 
                                            subject. GreenSock was used to give animation to a SVG image. Programs 
                                            used to create this project are HTML, CSS, JavaScript and React.
                                        </p>
                                            <div className="project-links">
                                                {/* <a className="links" target="_blank" rel="noopener noreferrer" href="">Live Site</a> */}
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/stremysonia/happy_halloween">Source Code</a>
                                            </div>
                            </div>
                            <div className="project-container-three">
                                <div className="project-title">Second Appinion</div>
                                    <div className="image-coming-soon">Image Coming Soon</div>
                                    {/* <img alt="#" className="wyneats-image" src={ratemymd}/> */}
                                        <p className="project-summary">After doing research and not finding a 
                                            database for female and male serial killers I chose to create my own. 
                                            The database consisted  of  name, date of birth, nickname, image, 
                                            proven victims, confessed victims and a brief description  of the 
                                            subject. GreenSock was used to give animation to a SVG image. Programs 
                                            used to create this project are HTML, CSS, JavaScript and React.
                                        </p>
                                            <div className="project-links">
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://second-appinion.herokuapp.com/">Live Site</a>
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/MVP-Marketplace/second-appinion">Source Code</a>
                                            </div>
                            </div>
                            <div className="project-container-four">
                                <div className="project-title">Ratemy.md</div>
                                    <img alt="#" className="wyneats-image" src={ratemymd}/>
                                        <p className="project-summary">RATEMYMD.COM is a web application developed 
                                            to give a voice to the voiceless. With this app visitors are able to comment 
                                            and rate their hospital, doctors and nurses be it positive or negative 
                                            mistreatment by hospital staff. This app uses HTML, CSS, JavaScript and 
                                            React. The app will use the Yelp Api to retrieve the most up to date 
                                            information about the doctors, nurses and hospitals in the Florida area.
                                        </p>
                                            <div className="project-links">
                                                {/* <a className="links" target="_blank" rel="noopener noreferrer" href="#">Live Site</a> */}
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/stremysonia/ratemymd.com">Source Code</a>
                                            </div>
                            </div>
                            <div className="project-container-five">
                                <div className="project-title">FindPeace</div>
                                    <img alt="#" className="wyneats-image" src={findpeace}/>
                                        <p className="project-summary">FindPeace is an application that gives users the 
                                            ability to find resources when they are at their most vulnerable. This app 
                                            was created using HTML, Pure CSS, CSS, JavaScript, and React on Rails. The 
                                            database of resources was created by the team because we could not find a 
                                            database that suited our needs. Mapbox GL with a token key was used to create 
                                            a map that would give the user direction to the resource center of their 
                                            choosing. An escape button was created when selected would direct the user 
                                            to a google search for yoga.
                                        </p>
                                            <div className="project-links">
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://find-peace.herokuapp.com/">Live Site</a>
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/wyncode/C36_find_peace">Source Code</a>
                                            </div>
                                    {/* <p>Also,create while attending BrainStation is a React on Rails app    </p> */}
                                {/* <img alt="#" className="wyneats-image" src={wyneats}/> */}
                            </div>
                            <div className="project-container-six">
                                <div className="project-title">Wyneats</div>
                                    <img alt="#" className="wyneats-image" src={wyneats}/>
                                        <p className="project-summary">After doing research and not finding a 
                                            database for female and male serial killers I chose to create my own. 
                                            The database consisted  of  name, date of birth, nickname, image, 
                                            proven victims, confessed victims and a brief description  of the 
                                            subject. GreenSock was used to give animation to a SVG image. Programs 
                                            used to create this project are HTML, CSS, JavaScript and React.
                                        </p>
                                            <div className="project-links">
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://wyneats1.herokuapp.com/">Live Site</a>
                                                <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/wyncode/C36_midterm_dean_jamile_joseph_lavonnyka_sonia">Source Code</a>
                                            </div>
                            </div>
                        </div>
                    </>
            
        );
}
export default Projects;