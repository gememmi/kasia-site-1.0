import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import logo from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/logo-white.png";
import blackLogo from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/logo-black.png";
import About from "./About";
import Gallery from "./Gallery";
import Menus from "./Menus";
import Contact from "./Contact";
import Home from './Home';

export default function Header() {
const [ isHovered, setIsHovered ] = useState(false);

function handleMouseEnter(){
  setIsHovered(true);
};

function handleMouseLeave(){
  setIsHovered(false); 
}




    return (
        <Router>
          <div>
        <div className="header">
            <div className="logo-container">
            <Link to="/" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
              <img src={ isHovered ? blackLogo : logo } alt="dinner play and knife logo with K L" className="logo-image"/>
            </Link>
            </div>
              <ul className="nav-links">
                <li>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="nav-link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/menus" className="nav-link">
                    Menus
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
        </div>
        </div> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/contact" element={<Contact />} />
    
          </Routes>
      </Router>
        
    );
};