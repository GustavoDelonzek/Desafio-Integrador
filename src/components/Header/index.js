import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { FcOnlineSupport } from "react-icons/fc";
import { AuthContext } from "../../contexts/authDetails";
import { FaCircleUser } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";

function Header() {
    const { user, logout } = useContext(AuthContext);
    return (
        <header id="cabecalho">
            <nav className="navbar">
                <div className="container-fluid d-flex flex-row justify-content-between">
                    {user ? (
                    <>
                        {user.cargo === "professor"? (
                            <div>
                            <Link to="/dashboard" className="btn cor-azul-claro">Home</Link>
                            <Link to="/reservas" className="btn cor-azul-claro">Reservas</Link>
                            <Link to="/suas-reservas" className="btn cor-azul-claro">Suas Reservas</Link>
                            
                        </div>    
                        ) : (
                            <></>
                        )}

                        {user.cargo === "nti" ? (
                            <>
                            <div>
                            <Link to="/dashboard" className="btn cor-azul-claro">Home</Link>
                                <Link to="/todas-reservas" className="btn cor-azul-claro">Reservas</Link> 
                            </div>
                             
                            </>
                           
                        ) : (
                            <></>
                        )}
                        <div>

                        </div>
                        <div className="dropdown  d-flex align-items-center">
                            <button className='btn dropdown-toggle cor-azul-claro hover-button text-uppercase' type='button' data-bs-toggle='dropdown' aria-expanded="false">{user.cargo}  <PiUserCircleFill size={45} /></button>

                            <ul className='dropdown-menu'>
                                <li><button onClick={logout} className='dropdown-item'>Sair</button></li>
                            </ul>
                        </div>

                    </>

                    )
                        : ('Erro ao carregar dados...')}
                </div>
            </nav>
        </header>
    )
}

export default Header;