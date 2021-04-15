import React, {useState, useEffect} from 'react'

const ThemeChanger = () =>{
    
    const [ themeState, setThemeState] = useState(true);
     
    
    function borderColorbk(){
        let border = document.body.getElementsByClassName('border-space');
        for(let i = 0; i <border.length; i++){
            border[i].style.background = 'black'
        }
    }
    function borderColorwt(){
        let border = document.body.getElementsByClassName('border-space');
        for(let i = 0; i <border.length; i++){
            border[i].style.background = 'white'
        }
    }

    function buttonColorbk(){
        let btn = document.body.getElementsByClassName('button-01');
        for(let i = 0; i < btn.length; i++){
            btn[i].style.background = 'black'
        }
    }
    function buttonColorwt(){
        let btn = document.body.getElementsByClassName('button-01');
        for(let i = 0; i < btn.length; i++){
            btn[i].style.background = 'white'
        }
    }

    function projectColorbk(){
        let project = document.body.getElementsByClassName('project')
        for(let i = 0; i < project.length; i++){
            project[i].style.background = 'black'
        }
    }
    function projectColorwt(){
        let project = document.body.getElementsByClassName('project')
        for(let i = 0; i < project.length; i++){
            project[i].style.background = 'white'
        }
    }
    function projectBtnColorbk(){
        let btn = document.body.getElementsByClassName('btn-projects')
        for(let i = 0; i < btn.length; i++){
            btn[i].style.background = 'black'
        }
    }
    function projectBtnColorwt(){
        let btn = document.body.getElementsByClassName('btn-projects')
        for(let i = 0; i < btn.length; i++){
            btn[i].style.background = 'white'
        }
    }
    const handleChange = () =>{
           
            console.log()
        setThemeState(!themeState);
        if(themeState){
            localStorage.setItem('Theme', 'dark');
            borderColorbk()
            buttonColorbk()
            projectColorbk()
            projectBtnColorbk()
            document.body.classList.add('dark-mode');
            document.body.getElementsByClassName('about-photo')[0].classList.add('dark-mode');
            document.body.getElementsByClassName('theme-change')[0].classList.add('dark-mode');
            document.body.getElementsByClassName('nav-wrapper')[0].style.background = 'black';
            document.body.getElementsByClassName('about-wrapper')[0].style.background = 'black';
            document.body.getElementsByClassName('button-container')[0].style.background = 'black';
            document.body.getElementsByClassName('btn')[0].style.background = 'black';
            document.body.getElementsByClassName('border-space')[0].style.background='black';
            document.body.getElementsByClassName('bar-bottom')[0].style.background = 'black';
            document.body.getElementsByClassName('btn-projects')[0].style.background = 'black';

            

        }else{
            localStorage.setItem('Theme', 'light');
            borderColorwt()
            buttonColorwt()
            projectColorwt()
            projectBtnColorwt()
            document.body.classList.remove('dark-mode');
            document.body.getElementsByClassName('about-photo')[0].classList.remove('dark-mode')
            document.body.getElementsByClassName('theme-change')[0].classList.remove('dark-mode');
            document.body.getElementsByClassName('button-container')[0].style.background = 'white';
            document.body.getElementsByClassName('button-01')[0].style.background = 'white'
            document.body.getElementsByClassName('nav-wrapper')[0].style.background = 'white';
            document.body.getElementsByClassName('border-space')[0].style.background = 'white';
            document.body.getElementsByClassName('about-wrapper')[0].style.background = 'white';
            document.body.getElementsByClassName('btn')[0].style.background = 'white';
            document.body.getElementsByClassName('bar-bottom')[0].style.background = 'white';
            document.body.getElementsByClassName('btn-projects')[0].style.background = 'white';
            
        }

        
       
     }


     return(
         <div className='theme-change'>
             <button className='theme-btn' onClick={handleChange}>{themeState ? 'Light' : 'Dark'}  </button>
         </div>
     )
}

export default ThemeChanger;