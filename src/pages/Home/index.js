import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <main id="pagina-principal" className="row">
            <section className="col-lg-8 col-sm-6 col-4 secao-dois d-flex flex-column justify-content-start align-items-center p-5">
                <article className="">
                    <h1 className=" texto-header">Sistema de chamados</h1>
                    <h1 className=" titulo-header">NTI</h1>
                </article>
                <article className="imagem">
                </article>

            </section>
            <section className="col-lg-4 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center">
                <article>
                    <h2 className="cor-azul">Vamos começar</h2>
                </article>
                <article>
                    <p className="">Para iniciar, faça login ou se registre.</p>
                </article>
                <div className="d-flex">
                    <article className="mx-2">
                        <Link to="/cadastro" className="btn cor-azul-botao ">Registre-se</Link>
                    </article>
                    <article className="mx-2">

                        <Link to="/login" className="btn cor-azul-botao ">Entrar</Link>
                    </article>
                </div>

            </section>

        </main>
    )
}

export default Home;