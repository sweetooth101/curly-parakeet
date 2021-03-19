import React from 'react';

const BBar = () =>{
    return(
        <div id='bar-bottom'>
            <div className='borderSpace-wrapper'>
                <div className='border-space bottom left'/>
                <div className='border-space bottom middle'/>
                <div className='border-space bottom right'/>
            </div>
            <div className='button-container'>
                <button className='button-01 button-02'>PROJECTS</button>
            </div>
        </div>
    )
}

export default BBar;