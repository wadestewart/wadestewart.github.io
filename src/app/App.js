import NavBar from "../navbar/NavBar"
import LandingPage from "../landing-page/LandingPage";
import './App.css';

/**
 * @summary This component is the entrance to the application,
 *  it renders the navbar used for site navigation
 */
function App() {
  return (
    <div className="App">
        <NavBar key={0}/>
        <LandingPage />
    </div>
  );
}

export default App;
