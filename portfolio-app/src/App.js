import background from './assets/beach-horizon.jpg';
import './styles/App.css';
import Header from './components/Header.js';
import About from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <img className="BgImage" src={background} alt='beach (background)'></img>
      <div className="ContentContainer">
        <Header/>
        <About/>
      </div>
    </div>
  );
}

export default App;