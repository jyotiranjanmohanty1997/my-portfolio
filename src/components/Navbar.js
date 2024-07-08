import React from 'react';
// import Logo from "../Logo.png";

import { Link } from 'react-router-dom';

import "./navbar.css";
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-info" >
            <div className="container">
                <Link className="navbar-brand"><strong>Portfolio</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav-bar" aria-current="page" to="/"><i className="fa fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Service"><i className="fa fa-suitcase"></i> Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Project"><i className="fa fa-file"></i> Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skills"><i className="fa fa-book"></i> Skill</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar
