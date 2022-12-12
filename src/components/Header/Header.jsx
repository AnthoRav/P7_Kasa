import React from "react";
import Img from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import HeaderCSS from "../Header/Header.module.css"

function Header() {
   return (
      <header className={HeaderCSS.header}>
        <img className={HeaderCSS.logo} src={Img} alt="logo de Kasa" />
            <nav className={HeaderCSS.nav}>
                <Link to="/" className={HeaderCSS.link}>
                    Accueil
                </Link>
                <Link to="/about" className={HeaderCSS.link}>
                    A Propos
                </Link>
            </nav>
      </header>
   );
}
export default Header