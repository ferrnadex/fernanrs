import logo from './logo.svg';
import './App.css';

import { Navbar } from './components/Navbar/navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, Fernan here! I am currently working on this website. <br /> Sorry, I am not using AI. I am enjoying the coding time!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ferrnadex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn @in/ferrnadex
        </a>
      </header>              
    </div>
  );
}

export default App;
