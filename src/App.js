
import './App.scss';
import NavBar from './page/navBar.js'
import About from './page/about.js'
import Projects from './page/projects';
import BBar from './page/bottomBar';
import { createRef, useEffect } from 'react';
import reactDom from 'react-dom';

function App() {

  const projectRef = createRef()
  console.log('app', projectRef)

 

  useEffect(()=>{
    console.log(reactDom.findDOMNode(Projects.proref))
})  

  return (
    <div className="App">
      <NavBar  />
      <About/>
      <Projects ref={projectRef}/>
      <BBar />
    </div>
  );
}

export default App;
