import React from "react";

import { Link } from "react-router-dom";
import "./style.css"
import { GiAbstract069 } from "react-icons/gi";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";

function HeaderLateral(){
    return(
        <nav id="dashboard" className="d-flex col-2 flex-column p-3 text-white bg-dark">
                <a className="text-decoration-none text-white"><GiAbstract069 size={36}/> NTI</a>
                <hr></hr>
                <ul className="mb-auto dashboard-lista">
                    <Link to="/dashboard" className="lista-item  d-flex align-items-center"><IoHomeOutline size={32} /> <span className="px-2">Dashboard</span></Link>
                    <Link to="/chamados" className="lista-item  d-flex align-items-center"><IoCallOutline size={32}/> <span className="px-2">Chamados</span></Link>
                    <li className="lista-item  d-flex align-items-center"><CgDanger size={32}/> <span className="px-2">Urgentes</span></li>

                </ul>
                <hr />
                <div class="btn-group dropup">
                    <a type="button" class="dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://picsum.photos/360/360?r=2" alt="" width="32" height="32" class="rounded-circle "/>Gus
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">cu</a></li>
                        <li><a class="dropdown-item" href="#">cu</a></li>
                        <li><a class="dropdown-item" href="#">cu</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default HeaderLateral;