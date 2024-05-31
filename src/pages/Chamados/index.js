import React, { useEffect, useContext, useState } from "react";
import HeaderLateral from "../../components/HeaderLateral";
import { PermissaoUsuarioContext } from "../../contexts/PermissaoUsuarioContext";

let isMobile = true;

function Chamados() {

    const { permissaoUsuario } = useContext(PermissaoUsuarioContext);
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
        <div style={{ display: 'flex' }}>
            <HeaderLateral />
            <div style={{ marginLeft: "230px", padding: "20px", flex: 1 }}>
                <h1>TESTE {permissaoUsuario} </h1>
                <main>
                    <p>{isMobile ? 'true' : 'false'} {width} a</p>
                </main>
            </div>
        </div>
    )
}

export default Chamados;