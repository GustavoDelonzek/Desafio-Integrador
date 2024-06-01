import React, { useContext, useState, useEffect} from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Header from "../../components/Header";

import AddChamado from "../../components/AddChamado";
import { BsClock } from "react-icons/bs";
import ListarChamado from "../../components/ListarChamados";
function Dashboard() {
    
    


    return (
        <>

            <Header></Header>
            <main id="dashboard" className="py-4" >
                <section className="mb-4 container">
                    <article className="d-flex justify-content-between">
                        <h3 className="cor-azul-escuro">Chamados: </h3>

                        <AddChamado />
                    </article>
                </section>
                <ListarChamado/>
            </main>
        </>


    )
}

export default Dashboard;