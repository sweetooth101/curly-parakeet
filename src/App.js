
import './App.scss';
import NavBar from './page/navBar.js'
import About from './page/about.js'
import Projects from './page/projects.js';
import BBar from './page/bottomBar.js';
import { createRef } from 'react';


function App() {

  const projectRef = createRef()



  return (
    <div className="App">
      <NavBar  />
      <About/>
      <Projects ref={projectRef}/>
      <BBar projectRef={projectRef}/>
    </div>
  );
}

export default App;
