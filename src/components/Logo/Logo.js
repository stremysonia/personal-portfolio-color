import React from 'react'
// import { Link }
import { NavLink } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
    return (
        <>
            <NavLink to="/"  className="portfolio-logo">
                <span className="logo">S</span>
                <span className="logo-size">t</span>
                <span className="logo">.</span>
                <span className="logo">R</span>
                <span className="logo-size">e</span>
                <span className="logo-size">m</span>
                <span className="logo-size">y</span>
            </NavLink>
        </>
    )
}

export default Logo