import React from'react';
import '../assets/sass.scss';



const NavBar = () =>{
    return (
        <div className='nav-wrapper'>
            <div className='borderSpace-wrapper'>
                <div className='border-space top left'/>
                <div className='border-space top middle'/>
                <div className='border-space top right'/>
            </div>

            
            <div className='nav'>
                <div id='left-button'>
                    <a><button className='button-01'>RESUME</button></a>
                </div>
                <div id='right-button'>
                    <a><button className='button-01'>EMAIL</button></a>
                </div>
                    
                
            </div>
        </div>
    )
}

export default NavBar;