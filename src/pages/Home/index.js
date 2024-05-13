import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <main id="pagina-principal" className="d-flex flex-column align-items-center">
            <section className="row container-fluid secao-um">

                <article className="col-12 align-items-center justify-content-center flex-column d-flex teste-texto">
                    <h1 className="texto-header titulo-header">Sitema de chamados</h1>
                    <p className="texto-header">Aproveite agora a praticidade de resolver seus problemas</p>

                    <button type="button" className="btn btn-light inline-block">Inscreva-se</button>


                </article>
            </section>

        </main>
    )
}

export default Home;