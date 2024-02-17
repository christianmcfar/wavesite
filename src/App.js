import './App.css';
// import AnimatedWave from "./AnimatedWave";
import { FaGithub, FaLinkedinIn, FaEnvelope  } from "react-icons/fa";
// import logo from "./logo.svg";
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';

function App() {
  console.log(window.location)
  // if (window.location.pathname === '/research') {
  //   return <Research />
  // }

  return (
    <div className="App">
      <nav className='Nav'>
        <a className='Nav-item' href="/">
          Home
        </a>
        {/* <a className='Nav-item' href="https://github.com/ctugulan" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a className='Nav-item' href="https://www.linkedin.com/in/christian-mcfarland/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a> */}
        {/* <a className='Nav-item' href="/research">
          Research
        </a> */}
        {/* <div> */}
          {/* <div> */}
            <a className='Nav-item' href="/">
              Research
            </a>
          {/* </div> */}
          {/* <div >
            <a className='Nav-item' href="/research">
              Waves
            </a> 
            <a className='Nav-item' href="/research">
              AI
            </a> 
          </div> */}
        {/* </div> */}
        <a className='Nav-item' href="/">
          Publications
        </a>
      </nav>

      {window.location.pathname === '/' && <Home />}
      {window.location.pathname === '/research' && <Research />}
      {window.location.pathname === '/publications' && <Publications />}

      <div className='Footer-dark'>
        <div className='Footer-links'>
          {/* <a href="https://github.com/ctugulan" target="_blank" rel="noopener noreferrer"> */}
            <FaLinkedinIn className='Footer-icon-dark' size={20} />
          {/* </a> */}
          <a href="https://github.com/ctugulan" target="_blank" rel="noopener noreferrer">
            <FaGithub className='Footer-icon-dark' size={20} />
          </a>
          <a href="mailto:ctugulan@uwo.ca" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className='Footer-icon-dark' size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
