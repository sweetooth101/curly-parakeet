import React, {forwardRef} from'react';
import '../assets/sass.scss';
import Work from '../data/works.json'
import IpadPro from '../assets/img/ipadpro.png'

import IphoneX from '../assets/img/tenantly-iphonex.png'

import '../assets/img/ipadpro.png'

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
                                        </div>
                                    </div>
                                </div>
                            })}
                            <div className='project'>
                            
                                    <div className='border-space top-left'/>
                                    <div className='border-space top-right'/>
                                    <div className='border-space bottom-left'/>
                                    <div className='border-space bottom-right'/>
                                    <h1>Tenantly</h1>

                                <div className='device-wrapper'>
                                    <div className='deviceImages-wrapper'>
                                        <div className='device-images'>
                                            <img src={IpadPro} alt='Ipad'/>
                                            <img src={IphoneX} alt='Ipad'/>
                                        </div>
                                        
                                    </div>                  
                                    <div className='description'>
                                        <h3>A property management application that makes the communication 
                                            and financial transactions easier between the tenant and landlord. 
                                            With two distict dashboards both tenants and clients have all of the 
                                            tools needed to efficiently resolve work orders and track payments.
                                        </h3>
                                        <div className='links'>
                                            <div className='btn-left'>
                                            <a href="https://github.com/Lambda-School-Labs/labspt2-property-management"><button className='btn-projects'>Git</button></a>
                                            </div>
                                            <div className='btn-right'>
                                            <a href="https://tenantly.netlify.app/"><button className='btn-projects'>Visit</button></a>
                                            </div>
                                            
                                        </div>
                                        <div className='tags'>
                                            
                                                <div className='react'><h1>React</h1></div>
                                                <div className='node'><h1>Node</h1></div>
                                                <div className='pg'><h1>Postgres</h1></div>
                                                <div className='stripe'><h1>Stripe</h1></div>
                                                <div className='express'><h1>Express</h1></div>
                                            
                                                
                                                
                                               
                                            
                                        </div>
                                    </div>
                                </div>
                                    
                                
                                
                            </div>
                            <div className='project'>
                            
                            <div className='border-space top-left'/>
                            <div className='border-space top-right'/>
                            <div className='border-space bottom-left'/>
                            <div className='border-space bottom-right'/>
                            <h1>Tenantly</h1>

                        <div className='device-wrapper'>
                            <div className='deviceImages-wrapper'>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>                  
                            <div className='description'>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.
                                </h3>
                                <div className='links'>
                                    <div className='btn-left'>
                                    <a href="https://github.com/Lambda-School-Labs/labspt2-property-management"><button className='btn-projects'>Git</button></a>
                                    </div>
                                    <div className='btn-right'>
                                    <a href="https://tenantly.netlify.app/"><button className='btn-projects'>Visit</button></a>
                                    </div>
                                    
                                </div>
                                <div className='tags'>
                                    
                                        <div className='react'><h1>React</h1></div>
                                        <div className='node'><h1>Node</h1></div>
                                        <div className='pg'><h1>Postgres</h1></div>
                                        <div className='stripe'><h1>Stripe</h1></div>
                                        <div className='express'><h1>Express</h1></div>
                                    
                                        
                                        
                                       
                                    
                                </div>
                            </div>
                        </div>
                            
                        
                        
                    </div>
                    <div className='project'>
                            
                            <div className='border-space top-left'/>
                            <div className='border-space top-right'/>
                            <div className='border-space bottom-left'/>
                            <div className='border-space bottom-right'/>
                            <h1>Tenantly</h1>

                        <div className='device-wrapper'>
                            <div className='deviceImages-wrapper'>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>                  
                            <div className='description'>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.
                                </h3>
                                <div className='links'>
                                    <div className='btn-left'>
                                    <a href="https://github.com/Lambda-School-Labs/labspt2-property-management"><button className='btn-projects'>Git</button></a>
                                    </div>
                                    <div className='btn-right'>
                                    <a href="https://tenantly.netlify.app/"><button className='btn-projects'>Visit</button></a>
                                    </div>
                                    
                                </div>
                                <div className='tags'>
                                    
                                        <div className='react'><h1>React</h1></div>
                                        <div className='node'><h1>Node</h1></div>
                                        <div className='pg'><h1>Postgres</h1></div>
                                        <div className='stripe'><h1>Stripe</h1></div>
                                        <div className='express'><h1>Express</h1></div>
                                    
                                        
                                        
                                       
                                    
                                </div>
                            </div>
                        </div>
                            
                        
                        
                    </div>
                    <div className='project'>
                            
                            <div className='border-space top-left'/>
                            <div className='border-space top-right'/>
                            <div className='border-space bottom-left'/>
                            <div className='border-space bottom-right'/>
                            <h1>Tenantly</h1>

                        <div className='device-wrapper'>
                            <div className='deviceImages-wrapper'>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>                  
                            <div className='description'>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.
                                </h3>
                                <div className='links'>
                                    <div className='btn-left'>
                                    <a href="https://github.com/Lambda-School-Labs/labspt2-property-management"><button className='btn-projects'>Git</button></a>
                                    </div>
                                    <div className='btn-right'>
                                    <a href="https://tenantly.netlify.app/"><button className='btn-projects'>Visit</button></a>
                                    </div>
                                    
                                </div>
                                <div className='tags'>
                                    
                                        <div className='react'><h1>React</h1></div>
                                        <div className='node'><h1>Node</h1></div>
                                        <div className='pg'><h1>Postgres</h1></div>
                                        <div className='stripe'><h1>Stripe</h1></div>
                                        <div className='express'><h1>Express</h1></div>
                                    
                                        
                                        
                                       
                                    
                                </div>
                            </div>
                        </div>
                            
                        
                        
                    </div>
                    <div className='project'>
                            
                            <div className='border-space top-left'/>
                            <div className='border-space top-right'/>
                            <div className='border-space bottom-left'/>
                            <div className='border-space bottom-right'/>
                            <h1>Tenantly</h1>

                        <div className='device-wrapper'>
                            <div className='deviceImages-wrapper'>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>                  
                            <div className='description'>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.
                                </h3>
                                <div className='links'>
                                    <div className='btn-left'>
                                    <a href="https://github.com/Lambda-School-Labs/labspt2-property-management"><button className='btn-projects'>Git</button></a>
                                    </div>
                                    <div className='btn-right'>
                                    <a href="https://tenantly.netlify.app/"><button className='btn-projects'>Visit</button></a>
                                    </div>
                                    
                                </div>
                                <div className='tags'>
                                    
                                        <div className='react'><h1>React</h1></div>
                                        <div className='node'><h1>Node</h1></div>
                                        <div className='pg'><h1>Postgres</h1></div>
                                        <div className='stripe'><h1>Stripe</h1></div>
                                        <div className='express'><h1>Express</h1></div>
                                    
                                        
                                        
                                       
                                    
                                </div>
                            </div>
                        </div>
                            
                        
                        
                    </div>
                    <div className='project'>
                            
                            <div className='border-space top-left'/>
                            <div className='border-space top-right'/>
                            <div className='border-space bottom-left'/>
                            <div className='border-space bottom-right'/>
                            <h1>Tenantly</h1>

                        <div className='device-wrapper'>
                            <div className='deviceImages-wrapper'>
                                <div className='device-images'>
                                    <img src={IpadPro} alt='Ipad'/>
                                    <img src={IphoneX} alt='Ipad'/>
                                </div>
                                
                            </div>                  
                            <div className='description'>
                                <h3>A property management application that makes the communication 
                                    and financial transactions easier between the tenant and landlord. 
                                    With two distict dashboards both tenants and clients have all of the 
                                    tools needed to efficiently resolve work orders and track payments.
                                </h3>
                                <div className='links'>
                                    <div className='btn-left'>
                                    <a href="https://github.com/Lambda-School-Labs/labspt2-property-management"><button className='btn-projects'>Git</button></a>
                                    </div>
                                    <div className='btn-right'>
                                    <a href="https://tenantly.netlify.app/"><button className='btn-projects'>Visit</button></a>
                                    </div>
                                    
                                </div>
                                <div className='tags'>
                                    
                                        <div className='react'><h1>React</h1></div>
                                        <div className='node'><h1>Node</h1></div>
                                        <div className='pg'><h1>Postgres</h1></div>
                                        <div className='stripe'><h1>Stripe</h1></div>
                                        <div className='express'><h1>Express</h1></div>
                                    
                                        
                                        
                                       
                                    
                                </div>
                            </div>
                        </div>
                            
                        
                        
                    </div>
                    
                            
                           
                    </ul>
                </div>
             
            
      
    )
})

export default Projects;