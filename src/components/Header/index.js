import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { FcOnlineSupport } from "react-icons/fc";

import logo from "../../assets/images/help-desk.png"


function Header() {
    return (
        <header id="cabecalho" className="container-fluid ">
            <nav className="navbar navbar-expand-lg p-2">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand link-cor logo-principal" href="#"><img src={logo} width="46"/>NTI</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarHeader">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link to='/dashboard' className="nav-link link-cor link-estilo" href="#">Atendimento</Link>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link link-cor link-estilo" href="#">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;