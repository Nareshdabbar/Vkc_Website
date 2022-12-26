import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    const [isMobile,SetisMobile] = useState(false);
  return (
    <div className='R-Nav'>
        <nav className='R-NavBar'>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} 
            onClick={()=>SetisMobile(false)}>
                <Link to="/" className="home">
                <li>Courses Offered |</li>
                </Link>
                <Link to="/about" className="about">
                <li>About |</li>
                </Link>
                <Link to="/skills" className="skills">
                <li>Skills |</li>
                </Link>
                <Link to="/contact" className="contact">
                <li>Contact |</li>
                </Link>
                <Link to="/courses" className="courses">
                <li>Training & Placement</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'
            onClick={()=>SetisMobile(!isMobile)}> 
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>

        </nav>
    </div>
  )
}

export default Navbar