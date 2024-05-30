import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import HeaderLateral from "../../components/HeaderLateral";

function Dashboard() {
    const {innerWidth: width, innerHeight: height} = window;

    return (

        <main className="container-fluid" >
            <section className="row">
                <HeaderLateral />
                <section className="text-center col-10 cor-fundo" >
                    <h1 className="col-12 p-2 my-2">Seja bem-vindo!</h1>
                    <article className="row">
                        <div className="col-md-6 px-4 my-2">

                            <div className="row bg-light justify-content-center p-2">
                                <h3>Chamados</h3>
                                <div className="box-chamados resolvidos mx-1 ">
                                    <small>Resolvidos</small>
                                    <h2>4</h2>
                                </div>
                                <div className="box-chamados nao-resolvidos mx-1">
                                <small>Não Resolvidos</small>
                                    <h2>3</h2>
                                </div>
                                <div className="box-chamados urgentes mx-1">
                                <small>Urgentes</small>
                                    <h2>0</h2>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6  px-4 my-2">
                            {width}

                        </div>


                    </article>
                </section>
            </section>

        </main>
    )
}

export default Dashboard;