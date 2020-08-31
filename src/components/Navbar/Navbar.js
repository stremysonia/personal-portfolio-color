import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
        return (
                <>
                        <div className="navbar-container">
                                <NavLink exact to="/" className="navbar">
                                        <span className="navbar-logo-1 logo">Sonia</span>
                                                <span className="logo-2"></span>
                                                        <span className="navbar-logo-2 logo">St.Remy</span>
                                </NavLink>
                                        <NavLink exact to="Contact"
                                                className="navbar-projects links">Contact
                                        </NavLink>
                                                <NavLink exact to="About"
                                                        className="navbar-about links">About
                                                </NavLink>
                                                        <NavLink exact to="Projects" 
                                                                className="navbar-contact links">Projects
                                                        </NavLink>
                        </div>
                
                </>
        );
}
export default Navbar;