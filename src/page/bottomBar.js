import React, { useEffect, useState } from 'react';


function BBar(props){
    const [project, setProject] = useState('PROJECTS')
    
    const [hover, setHover] = useState(false)
    const [arrow, setArrow] = useState('▼')
    
    const [number, setNumber] = useState(0)
    const [page, setPage] = useState(null)
   
    
    
    useEffect(()=>{
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
        const  handleScroll = () =>{
    
            setNumber(window.pageYOffset)
            checkScroll()
        };


        handleScroll()
        window.addEventListener('scroll', setNumber)
    }, [number])

   const clickHandler= (e) =>{

        if(page === 1){
            window.scrollTo({
                top:props.projectRef.current.offsetTop-45,
                behavior:'smooth'
            })
        }else{
       
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
        
   }

    return(
        <div id='bar-bottom' className='bar-bottom'>
            <div className='borderSpace-wrapper'>
                <div className='border-space bottom left'/>
                <div className='border-space bottom middle'/>
                <div className='border-space bottom right'/>
            </div>
            <div className='button-container' >
                <button className='btn'
                onClick={clickHandler}
                onMouseEnter={()=>setHover(true)}
                onMouseOut={()=>setHover(false)}>{ hover? (arrow) : (project)  } </button>

           
                
                
                 
                
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