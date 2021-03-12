import React from 'react';
import me from '../assets/img/me.jpg'

const About = () => {
    return(
        <div className='about'>
            <div className='about-photo'><img src={me} alt='tree'/></div>
            <div className='about-text'>
                <h1>Hi there! 👋 I'm Victor Gordian</h1>
                <h3>Prior to pivoting my career towards software engineering, I worked as a Project Manager in and out of the Tech Industry. My interest and experience started as a developer for Wordpress sites, which eventually led to learning Javascript, and jQuery. Because of this experience, I was able to join SQAsquared as Jr QA where I learned about test workflows such as functional, non-functional and automation testing. 
                    After some introductory online React classes, I was hooked; I knew software engineering was the career path for me.  In June 2018, I enrolled in Lambda for an immersive full-stack course.  Upon graduating I was offered a Team Lead position to help the next cohort of students in their journey of software engineering. As a result I was hired by Mobile Wash to contribute to develop Frontend, Backend features and help release app updates every 2-3 weeks with QA support.
                    When I’m not being a professional computer nerd…I’m probably planning my next adventure around Los Angeles, going on hikes or drives. Watching my dog sleep, while waiting for restaurants and bars to reopen safely and playing League of Legends or Call of Duty. 
                </h3>
            </div>
        </div>
    )
}

export default About;