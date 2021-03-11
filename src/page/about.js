import React from 'react';
import tree from '../assets/img/trees.jpg'

const About = () => {
    return(
        <div className='about'>
            <div className='aboutPhoto'><img src={tree} alt='tree'/></div>
            <div className='aboutText'>
                <h1>Hi there! 👋 I'm Victor Gordian</h1>
                <h3>Prior to pivoting my career towards software engineering, I worked at a major advertising agency and launched a freelance writing career. After working with Fortune-100 brands at VaynerMedia, serving as Gary Vaynerchuk’s assistant, and writing for UPROXX Media I longed for a more challenging career that would allow me to grow and evolve as a creative professional.
                After some introductory, online JavaScript classes I was hooked; I knew software engineering was the career path for me. In September 2018, I enrolled in Fullstack Academy’s full-time Software Engineering Immersive program. Upon graduating from Fullstack in December 2018, I was offered a Teaching Fellowship role to help the next cohort of students in their journey to software engineering.
                In April 2019 I started as a Jr. Full Stack Engineer at Paro in Chicago. At Paro, we're building the future of finance work by empowering people to do what they love. Check it out at Paro.io.
                When I'm not being a professional computer nerd... I'm probably exploring new bars/restaurants in Chicago, going to a concert, watching sports, wishing I had a pup, and tweeting too much.</h3>
            </div>
        </div>
    )
}

export default About;