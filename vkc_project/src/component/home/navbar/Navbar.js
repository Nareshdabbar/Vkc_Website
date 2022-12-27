import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navbar.css";
function Navbar1() {

    return (
        <div className=''>
            <Navbar  expand="md" >
               
                    <div>
                        <Link to="/"> 
                        <img src="../images/vkc-logo.jpg" />
                        </Link>
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