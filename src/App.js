
import './App.scss';
import NavBar from './page/navBar.js'
import About from './page/about.js'
import Projects from './page/projects';
import BBar from './page/bottomBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects/>
      <BBar />
    </div>
  );
}

export default App;
