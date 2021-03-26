import React, {createContext, useCallback, useEffect, useState, } from 'react';


function BBar(){
    const [project, setProject] = useState('PROJECTS')
    
    const [hover, setHover] = useState(false)
    const [arrow, setArrow] = useState('▼')
 
    const [number, setNumber] = useState(0)

 
    const checkScroll = () => {
        if(number>0){
            setArrow('▲')
            setProject('ABOUT')
            
        } else{
            setArrow('▼')
            setProject('PROJECTS')
            
        }
    }
 
    const  handleScroll = useCallback(() =>{
        setNumber(window.pageYOffset)
        checkScroll()
    },[checkScroll]);

   

    

    
    
    useEffect(()=>{
        handleScroll()
        window.addEventListener('scroll', setNumber)
    }, [ handleScroll])

   const clickHandler= (e) =>{
        
   }

    return(
        <div id='bar-bottom'>
            <div className='borderSpace-wrapper'>
                <div className='border-space bottom left'/>
                <div className='border-space bottom middle'/>
                <div className='border-space bottom right'/>
            </div>
            <div className='button-container' >
                {<button className='button-01 button-02 btn'
                onClick={()=>console.log('hi')}
                onMouseEnter={()=>setHover(true)}
                onMouseOut={()=>setHover(false)}>{ hover? (arrow) : (project)  }</button>}
                
                
                 
                
            </div>
            
        </div>
    )
}



export default BBar;




/** if(number < 1){
    hover? (darrow) : (project)
 }else{
    hover? (uarrow) : (about) 
 } **/