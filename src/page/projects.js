import React, {forwardRef} from'react';
import '../assets/sass.scss';
import Work from '../data/works.json';

import '../assets/img/ipadpro.png';

const Projects =forwardRef(( props,proRef) =>{
    console.log(Work.map(function(item,i){
        return<li key={i}><ul></ul></li>
    }))
    return (
           
                <div ref={proRef}  className='projects-wrapper' id={'projects'}>
                    
                    <ul className='projects'>
                            {Work.map(function(item,i){
                             
                                return <div className='project' key={i}>
                                    <div className='border-space top-left'/>
                                    <div className='border-space top-right'/>
                                    <h1>{item.title}</h1>
                                    <div className='device-wrapper'>
                                        {item.images ? 
                                        <div className='deviceImages-wrapper'>
                                        <div className='device-images'>                
                                            <img src={item.images[0].url} alt={item.images[0].name}/>
                                            <img src={item.images[1].url} alt={item.images[1].name} />
                                        </div>
                                        
                                    </div>
                                    :null
                                    }
                                       
                                        <div className='description'>
                                            <h3>{item.description}</h3>
                                            <div className='links'>
                                                <div className='btn-left'>
                                                <a href={item.links[1].url}><button className='btn-projects'>{item.links[1].name}</button></a>
                                                </div>
                                                <div className='btn-right'>
                                                <a href={item.links[0]}><button className='btn-projects'>Visit</button></a>
                                                </div>

                                            </div>
                                            <div className='tags'>
                                                {item.tags.map(t => <div className={t}><h1>{t}</h1></div>)}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                    
                            
                           
                    </ul>
                </div>
             
            
      
    )
})

export default Projects;