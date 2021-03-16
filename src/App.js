
import './App.scss';
import NavBar from './page/navBar.js'
import About from './page/about.js'
import Projects from './page/projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects/>
    </div>
  );
}

export default App;
