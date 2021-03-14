import React from'react';
import '../assets/sass.scss';
import Git from '../assets/img/github64.png'
import LI from '../assets/img/bl-li.png'
import Email from '../assets/img/email.png'
import Resume from '../assets/img/resume.png'


const NavBar = () =>{
    return (
        <div className='nav-wrapper'>
            <div className='nav'>
                <div className='icons'>
                    <img src={Email} alt='Email Logo'/> 
                    <img src={LI} alt='Linkedin Logo'/> 
                    <img src={Git} alt='Git Logo' />
                    <img src={Resume} alt='Resume Logo'/> 
                </div>
                
                <div className='menu'>
                    <h1>PROJECTS</h1>
                    <h1>EXPERIENCE</h1>
                    <h1>CONTACT</h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar;