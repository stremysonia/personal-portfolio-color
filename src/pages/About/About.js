import React from 'react';
import './About.css';

const About = () => {
        return (
        <>
            <div className="about-container">
            <div className="about-title">
                    <span className="about-flicker">A</span>
                    <span className="">b</span>
                    <span className="about-flicker">o</span>
                    <span>u</span>
                    <span className="about-flicker about-space">t</span>
                        <span>M</span>
                        <span className="about-flicker">e</span>
                            <span className="about-effect about-bounce-one"></span>
                            <span className="about-effect about-bounce-two"></span>
                            <span className="about-effect about-bounce-three"></span>
            </div>
                <p className="bio"> 
                        My name is Sonia St. Remy. I was born and raised in the Miami,
                        Florida area where the mix of various cultures has made me the person I
                        am today. My career has been spent working two years in the social
                        service in drug treatment and ten years in various customer service
                        roles. I enjoyed my time in these career fields but I realized I wanted
                        to help more people on a larger scale. So, I decided to make a career
                        change and attended Wyncode Academy where I graduated with a certificate
                        in Full Stack Web Development. After graduating I have been sharpening
                        my skills to be the best Front End Web Developer I can be. I have
                        finally found the career that will blend my passion for creativity and my
                        love for technology.
                        <div className="words">
                            <span>Edgy</span> 
                            <span>Creative</span> 
                            <span>Passionate</span> 
                            <span>Inquistive</span> 
                            <span>Charismatic</span> 
                        </div>
                </p>
        </div>
    </>
    );
}
export default About;