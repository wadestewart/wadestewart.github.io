import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import NavBar from "../navbar/NavBar";
  import LandingPage from "../landing-page/LandingPage";
  import About from '../about/About';
  import Projects from '../projects/Projects';
  import Contact from '../contact/Contact';

  const Routing = () => {
      return (
          <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<LandingPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
          </BrowserRouter>
      )
  }

  export default Routing;
