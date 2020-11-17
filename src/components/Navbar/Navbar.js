import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
        return (
                <>
        
                        <div className="navbar-container">
                                <NavLink exact to="/" className="logo-animation links">
                                        <span className="logo">Sonia</span>
                                                <span className=" logo">St.Remy</span>
                                </NavLink>
                                                <NavLink exact to="Contact">
                                                        <ul className="navbar-contact links">Contact</ul>
                                                </NavLink>
                                                        <NavLink exact to="Projects">
                                                                <ul className="navbar-projects links">Projects</ul>
                                                        </NavLink>
                                                                <NavLink exact to="About">
                                                                        <ul className="navbar-about links">About</ul>
                                                                </NavLink>
                        </div>
                </>
        );
}
export default Navbar;