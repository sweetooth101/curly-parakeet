import React, {useState} from 'react';
import down from '../assets/img/down.png'

function BBar(){
    const [inital, setInitial] = useState('PROJECTS')
    const [hover, setHover] = useState(false)
    const [arrow, setArrow] = useState('▼')
    return(
        <div id='bar-bottom'>
            <div className='borderSpace-wrapper'>
                <div className='border-space bottom left'/>
                <div className='border-space bottom middle'/>
                <div className='border-space bottom right'/>
            </div>
            <div className='button-container'>
                <button className='button-01 button-02 btn' 
                onMouseOver={()=>setHover(true)}
                onMouseOut={()=> setHover(false)}>{hover? (arrow) : (inital) }</button>
                
                
            </div>
        </div>
    )
}

export default BBar;

