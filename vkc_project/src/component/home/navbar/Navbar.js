import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useState } from 'react';
import "./Navbar.css";
function Navbar1() {
    // const [isMobile,SetisMobile] = useState(false);
    return (
        <div className=''>
            <Navbar  expand="md" >
               
                    <div>
                        <NavLink to="/"> <img src="../images/mainslides/vkc-logo.jpg" /></NavLink>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div className='menu'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" >Home</NavLink>
                            <NavLink to="/service" > Services</NavLink>
                            <NavLink to="/case">Case Study</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </div>
    )
}

export default Navbar1