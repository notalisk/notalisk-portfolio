import React, { useState } from 'react';

import background from './assets/beach-horizon.jpg';
import './styles/App.css';
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

let classes = ['here', '', '', ''];

function App() {
  var pages = [<About/>, <Portfolio/>, <Resume/>, <Contact/>];
  //var [currentPage, setPage] = useState(0);

  const [currentPage, setPage] = useState(0);

    function switchPage(newPage) {
        setPage(newPage);
        classes[currentPage] = '';
        classes[newPage] = 'here';
        return;
    }

  return (
    <div className="App">
      <img className="BgImage" src={background} alt='beach (background)'></img>
      <div className="ContentContainer">
      <div>
            <h1>Ellen Kolbly</h1>
            <nav>
                <ul>
                    <li className={classes[0]} onClick={() => switchPage(0)}>About Me</li>
                    <li className={classes[1]} onClick={() => switchPage(1)}>Portfolio</li>
                    <li className={classes[2]} onClick={() => switchPage(2)}>Resume</li>
                    <li className={classes[3]} onClick={() => switchPage(3)}>Contact</li>
                </ul>
            </nav>
        </div>
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default App;