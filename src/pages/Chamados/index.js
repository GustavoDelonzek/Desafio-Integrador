import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderLateral from "../../components/HeaderLateral";
import { GiAbstract069 } from "react-icons/gi";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";

let isMobile = true;

function Chamados() {

    const [width, setWidth] = useState(window.innerWidth); 
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        isMobile = window.innerWidth < 700 ? true : false;
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    return (
        
        <div style={{ position: "relative" }}>
            <nav id="dashboard" className="d-flex flex-column p-3 text-white bg-dark " style={{ maxHeight: '100%', position: 'fixed' }}>
                <a className="text-decoration-none text-white"><GiAbstract069 size={36} /> NTI</a>
                <hr></hr>
                <ul className="mb-auto dashboard-lista">
                    <Link to="/dashboard" className="lista-item  d-flex align-items-center"><IoHomeOutline size={32} /> <span className="px-2">Dashboard</span></Link>
                    <Link to="/chamados" className="lista-item  d-flex align-items-center"><IoCallOutline size={32} /> <span className="px-2">Chamados</span></Link>
                    <li className="lista-item  d-flex align-items-center"><CgDanger size={32} /> <span className="px-2">Urgentes</span></li>

                </ul>
                <hr />
                <div className="btn-group dropup">
                    <a type="button" className="dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://picsum.photos/360/360?r=2" alt="" width="32" height="32" className="rounded-circle " />Gus
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">cu</a></li>
                        <li><a className="dropdown-item" href="#">cu</a></li>
                        <li><a className="dropdown-item" href="#">cu</a></li>
                    </ul>
                </div>
            </nav>
            <main style={{ marginLeft: "230px", minHeight: '200vh' }}>
                <p>{isMobile ? 'true' : 'false'} {width} a</p>
            </main>
        </div>

    )
}

export default Chamados;