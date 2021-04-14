import React from 'react';
import '../assets/sass.scss';
import Git from '../assets/img/github64.png'
import LI from '../assets/img/bl-li.png'


const About = () => {
    return(
        <div className='about-wrapper'>
            <div className='about'>
                <div className='about-photo'>
                    <img src='https://raw.githubusercontent.com/sweetooth101/curly-parakeet/main/.github/images/4A3A4774.jpg' alt='tree'/> 
                </div>
                <div className='about-text'>
                    <h1>Hi there! 👋 <br className='br'/> I'm Victor Gordian</h1>
                    <h3>
                    Highly motivated, self-starting developer seeking to launch a career building web applications and services. With some introductory online Javascript 
                    classes in 2014, I was hooked into the world of software development. My interest in software led me to start as a WordPress developer, then a Jr QA which 
                    helped me understand different workflows to test software. In 2018, I enrolled in Lambda for an immersive full-stack course. Upon graduating I was offered a 
                    Team Lead position to help the next cohort of students in their journey of software development. As a result, I was hired by Mobile Wash to assit the Project Owner with planning, tracking and executing, as a Project Manager.
                    </h3>
                    
                    <h3>When I’m not coding…I’m probably planning my next adventure around Los Angeles, going on hikes or drives.  </h3>
                    <div className='icons'>
                        <a href='https://www.linkedin.com/in/victor-gordian/'><img src={LI} alt='Linkedin Logo'/> </a>
                        <a href='https://github.com/sweetooth101'><img src={Git} alt='Git Logo' /></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About;