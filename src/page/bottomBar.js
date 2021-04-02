import React, {useCallback, useEffect, useState, useContext } from 'react';


function BBar(){
    const [project, setProject] = useState('PROJECTS')
    
    const [hover, setHover] = useState(false)
    const [arrow, setArrow] = useState('▼')
    
    const [number, setNumber] = useState(0)
    const [page, setPage] = useState(null)
   
    

    const checkScroll = () => {
        if(number>350){
            setArrow('▲')
            setProject('ABOUT')
            setPage(0)
            
            
        } else{
            setArrow('▼')
            setProject('PROJECTS')
            setPage(1)
            
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

        if(page === 1){
            console.log('hi',page)
            
            window.scrollTo({
                top:681,
                behavior:'smooth'
            })
        }else{
            console.log('ho',page)
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
        
   }

    return(
        <div id='bar-bottom'>
            <div className='borderSpace-wrapper'>
                <div className='border-space bottom left'/>
                <div className='border-space bottom middle'/>
                <div className='border-space bottom right'/>
            </div>
            <div className='button-container' >
                <button className='button-01 button-02 btn'
                onClick={clickHandler}
                onMouseEnter={()=>setHover(true)}
                onMouseOut={()=>setHover(false)}>{ hover? (arrow) : (project)  }  </button>

           
                
                
                 
                
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