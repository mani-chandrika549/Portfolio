import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">Portfolio</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
