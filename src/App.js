import logo from './logo.svg';
import './App.css';

import { Dropdown } from './Dropdown.js'
import { Element } from './Element.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, Fernan here! I am currently working on this website. Sorry, I am not using AI. I am enjoying the coding time!
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

      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="ferrnadex" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/ferrnadex?trk=profile-badge">Fernan R.</a></div>
              
    </div>
  );
}

export default App;
