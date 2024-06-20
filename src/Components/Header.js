import { NavLink } from "react-router-dom";
import React, { useCallback } from 'react';
import logo from "../Assets/Logo.png";
import "../Scss/Header.scss";

function Header() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo kasa" className="kasa-logo-nav" />
            <nav className="navbar__nav">
                <ul>
                    <li>
                        <NavLink to="/Projet-6-kasa/" className={useCallback(({isActive}) => isActive ? 'active' : '', [])}> Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Projet-6-kasa/about" className={useCallback(({isActive}) => isActive ? 'active' : '', [])}>A propos</NavLink>
                    </li>
                </ul>
            </nav>
    </div>
    )
}

export default Header