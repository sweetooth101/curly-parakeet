import React from'react';
import '../assets/sass.scss';
import Mac from '../assets/img/mac.png'
import IpadPro from '../assets/img/ipadpro.png'
import Iphone from '../assets/img/iphone.png'
import IphoneX from '../assets/img/tenantly-iphonex.png'

const Projects = () =>{
    return (
        <div className='projects-wrapper'>
            <div className='projects'>
                <div className='project'>
                    <div className='name'>
                        <h1>Tenantly</h1>
                        <h3>is a property management application that makes the communication 
                            and financial transactions easier between the tenant and landlord. 
                            With two distict dashboards both tenants and clients have all of the 
                            tools needed to efficiently resolve work orders and track payments.</h3>
                    </div>
                    <div className='device-images'>
                        <img src={IpadPro} alt='Ipad'/>
                        <img src={IphoneX} alt='Ipad'/>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Projects;