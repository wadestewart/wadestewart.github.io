import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import NavBar from "../navbar/NavBar";
  import About from '../about/About';
  import Projects from '../projects/Projects';
  import Contact from '../contact/Contact';

  const Routing = () => {
      return (
          <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/home' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Projects />} />
            </Routes>
          </BrowserRouter>
      )
  }

  export default Routing;
