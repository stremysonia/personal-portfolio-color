import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
        return (
                <>
        
                        <div className="navbar-container">
                                <NavLink exact to="/" className="logo-animation links">
                                        <span className="logo">Sonia St.Remy</span>
                                </NavLink>
                                        <NavLink exact to="Contact" className="links">Contact
                                        </NavLink>
                                                <NavLink exact to="Projects" className="links">Projects
                                                </NavLink>
                                                        <NavLink exact to="About" className="links">About
                                                        </NavLink>
                        </div>
                </>
        );
}
export default Navbar;