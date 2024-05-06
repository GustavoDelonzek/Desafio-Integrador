import React from "react";
import "./style.css"
function Home() {
    return (
        <main id="pagina-principal" className="d-flex flex-column align-items-center">
            <section className="row container-fluid secao-um">

                <article className="col-6 align-items-center justify-content-center flex-column d-flex teste-texto">
                    <h1 className="texto-header titulo-header">NTI-Chamados</h1>
                    <p className="texto-header">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </article>
                <article className="col-6 justify-content-center align-items-center d-flex"></article>
            </section>
            <section className="row container-fluid secao-dois">
                <article  className="col-6 justify-content-center align-items-center d-flex">Chamados NTI</article>
            </section>
            
        </main>
    )
}

export default Home;