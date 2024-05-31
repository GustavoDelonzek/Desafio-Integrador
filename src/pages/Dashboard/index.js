import React, { useContext } from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { ChamadoCrudContext } from "../../contexts/chamadoCrud";

import imagem from "../../assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg"

function Dashboard() {
    const { chamado } = useContext(ChamadoCrudContext);

    return (
        <>

            <Header></Header>
            <main className="py-4 container" >
                <section className="mb-4">
                    <article className="d-flex justify-content-between">
                        <h4>Chamados: </h4>
                        <button className="btn btn-crud-chamado">Adicionar</button>
                    </article>
                </section>
                <section>
                    {chamado.map((element) => (
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src={imagem} className="rounded-start img-fluid" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div>
                                            <h5 className="card-title">{element.sala} - {element.bloco}</h5>
                                            <p className="card-text">{element.categoria}</p>
                                        </div>
                                        <p className="card-text">{element.descricao}</p>
                                        <p className="card-text"><small className="text-body-secondary">{element.data.toLocaleString()} - {element.usuario}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </section>
            </main>
        </>


    )
}

export default Dashboard;