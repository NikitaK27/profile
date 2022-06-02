// import logo from './logo.svg';
// import './App.css';
// import Profile from './component/Profile';
// import * as ReactBootStrap from "react-bootstrap";
// //import MoreDeets from './component/MoreDeets';

// function App() {
//   return (
//     <div className="App">
//       <Profile/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from './component/Navbar';
import { Routes } from 'react-router-dom';
import About from './component/Profile';
// import Contact from './pages/Contact/Contact';
 import Home from './component/Home';
// import Services from './pages/Service/Services';
// import Testimonial from './pages/Testimonial/Testimonial';
// import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<About />}/>
          
        <Route path="/about" element={<Home/>}/>
          
        {/* <Route path="/about" exact>
          <Services/>
        </Route> */}
        {/* <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route> */}
        {/* <Redirect to="/" /> */}
      </Routes>
    </main>
   </Router>
  );
}

export default App;
