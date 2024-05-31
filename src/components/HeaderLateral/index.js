import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { GiAbstract069 } from "react-icons/gi";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { PermissaoUsuarioContext } from "../../contexts/PermissaoUsuarioContext";

function HeaderLateral() {
    const { permissaoUsuario, setPermissaoUsuario } = useContext(PermissaoUsuarioContext);

    return (
        <nav id="dashboard" className="d-flex col-2 flex-column p-3 text-white bg-dark" style={{ width: "230px", minHeight: '100vh' }}>
            <a className="text-decoration-none text-white"><GiAbstract069 size={36} /> NTI</a>
            <hr />
            <ul className="mb-auto dashboard-lista">
                {permissaoUsuario == "admin" ?
                    <Link to="/dashboard" className="lista-item d-flex align-items-center"><IoHomeOutline size={32} /> <span className="px-2">Dashboard</span></Link>
                 : ""}
                <Link to="/chamados" className="lista-item d-flex align-items-center"><IoCallOutline size={32} /> <span className="px-2">Chamados</span></Link>
                {permissaoUsuario == "admin" ?
                    <li className="lista-item d-flex align-items-center"><CgDanger size={32} /> <span className="px-2">Urgentes</span></li>
                : ""}

            </ul>
            <hr />
            <div className="btn-group dropup"> 
                <a type="button" className="dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://picsum.photos/360/360?r=2" alt="" width="32" height="32" className="rounded-circle" />Gus {permissaoUsuario}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => setPermissaoUsuario("aluno")} href="#">Aluno</a></li>
                    <li><a className="dropdown-item" onClick={() => setPermissaoUsuario("professor")} href="#">Professor</a></li>
                    <li><a className="dropdown-item" onClick={() => setPermissaoUsuario("admin")} href="#">Admin</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderLateral;