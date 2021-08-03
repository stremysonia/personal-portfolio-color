import React from 'react';
import './Navbar.css';
import Logo from '../../components/Logo/Logo'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
        return (
                <>
                        <div className="navbar-container">
                                <div className="navbar">
                                        <Logo/>
                                        <NavLink to="/About" className="navbar-links">About</NavLink>
                                        <NavLink to="/Projects" className="navbar-links">Projects</NavLink>
                                        <NavLink to="/Contact" className="navbar-links">Contact</NavLink>
                                </div>
                        </div>
                </>
        );
}

export default Navbar