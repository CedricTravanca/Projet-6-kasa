import { NavLink } from "react-router-dom"
import logo from "../Assets/Logo.png"
import "../css/Header.css"

function Header() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo kasa" className="kasa-logo-nav" />
            <nav className="navbar--nav">
                <ul>
                    <li>
                        <NavLink to="/"> Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">A propos</NavLink>
                    </li>
                </ul>
            </nav>
    </div>
    )
}

export default Header