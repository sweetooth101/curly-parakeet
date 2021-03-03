import React from'react';
import '../assets/sass.scss';


const NavBar = () =>{
    return (
        <div className='nav-wrapper'>
          
                <div className='name'>
                    <h1>VICTOR GORDIAN</h1>
                </div>
                <div className='animation'>
                    <div className='top'> 
                        <div className='box' />
                        <div className='box' />
                    </div>
                    <div className='bottom'>
                        <div className='box' />
                        <div className='box' />
                    </div>
                    

                    
                </div>
                <div className='menu'>
                    <h1>PROJECTS</h1>
                    <h1>EXPERIENCE</h1>
                    <h1>CONTACT</h1>
                </div>
            
        </div>
    )
}

export default NavBar;