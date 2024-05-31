import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { FcOnlineSupport } from "react-icons/fc";
import { AuthContext } from "../../contexts/authDetails";
import { FaCircleUser } from "react-icons/fa6";


function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header id="cabecalho">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex flex-row justify-content-end">
                    {user ? (
                        <div className="d-flex align-items-center">
                            <button className='btn' type='button' >{user.email}  <FaCircleUser size={35}/></button>
                           
                        </div>

                    )
                        : ('Erro ao carregar dados...')}
                </div>
            </nav>
        </header>
    )
}

export default Header;