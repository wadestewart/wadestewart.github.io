import wade from '../img/transparent-lander.png';
import NavBar from "../navbar/NavBar"
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <img src={wade} className="wade-img" alt="wade" />
        <div class="landing-text">
          <div class="typing">
              <p>Hi, I'm Wade.</p>
          </div>
          <div class="hl"></div>
          <p>Full Stack Web Developer</p>
          <p>Creative Problem Solver</p>
          <p>Design Nerd</p>
        </div>
    </div>
  );
}

export default App;
