import React, {createRef, useEffect, useState} from'react';
import '../assets/sass.scss';
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import IpadPro from '../assets/img/ipadpro.png'

import IphoneX from '../assets/img/tenantly-iphonex.png'
import { findByPlaceholderText } from '@testing-library/dom';

const Projects = () =>{
    
    const [focus, setFocus] = useState(true)


    const rref = createRef();

   
    useEffect(()=>{
        if(focus === true){
            rref.current.focus();
            
        }
        
        
    },[])

    return (     
            <div  ref={rref} className='projects-wrapper' id={'projects'}>
                
                <ul className='projects'>
                    
                        <div className='project'>
                         
                                <div className='border-space top-left'/>
                                <div className='border-space top-right'/>
                                <div className='border-space bottom-left'/>
                                <div className='border-space bottom-right'/>
                                            
                            <div className='name'>
                                <h1>Tenantly</h1>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.</h3>
                            </div>
                            <div className='deviceImages-wrapper'>
                                <div className='stack-icons'>
                                    <img src={react} alt='react'/>
                                    <img src={node} alt='node'/>
                                </div>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>    
                        </div>
                        <div className='project'>
                            
                                <div className='border-space top-left'/>
                                <div className='border-space top-right'/>
                                <div className='border-space bottom-left'/>
                                <div className='border-space bottom-right'/>
                                                
                            <div className='name'>
                                <h1>Tenantly</h1>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.</h3>
                            </div>
                            <div className='deviceImages-wrapper'>
                                <div className='stack-icons'>
                                    <img src={react} alt='react'/>
                                    <img src={node} alt='node'/>
                                </div>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>    
                        </div>
                        <div className='project'>
                            
                                <div className='border-space top-left'/>
                                <div className='border-space top-right'/>
                                <div className='border-space bottom-left'/>
                                <div className='border-space bottom-right'/>
                                                  
                            <div className='name'>
                                <h1>Tenantly</h1>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.</h3>
                            </div>
                            <div className='deviceImages-wrapper'>
                                <div className='stack-icons'>
                                    <img src={react} alt='react'/>
                                    <img src={node} alt='node'/>
                                </div>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>    
                        </div>
                        <div className='project'>
                            
                                <div className='border-space top-left'/>
                                <div className='border-space top-right'/>
                                <div className='border-space bottom-left'/>
                                <div className='border-space bottom-right'/>
                                                  
                            <div className='name'>
                                <h1>Tenantly</h1>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.</h3>
                            </div>
                            <div className='deviceImages-wrapper'>
                                <div className='stack-icons'>
                                    <img src={react} alt='react'/>
                                    <img src={node} alt='node'/>
                                </div>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>    
                        </div>
                        <div className='project'>
                            
                                <div className='border-space top-left'/>
                                <div className='border-space top-right'/>
                                <div className='border-space bottom-left'/>
                                <div className='border-space bottom-right'/>
                                                  
                            <div className='name'>
                                <h1>Tenantly</h1>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.</h3>
                            </div>
                            <div className='deviceImages-wrapper'>
                                <div className='stack-icons'>
                                    <img src={react} alt='react'/>
                                    <img src={node} alt='node'/>
                                </div>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>    
                        </div>
                </ul>
            </div>
      
    )
}

export default Projects;