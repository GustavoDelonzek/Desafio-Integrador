import React, { useEffect, useState } from "react";
import './style.css'

import { useContext } from 'react';
import { AuthContext } from '../../contexts/authDetails'
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [username, setUsername] = useState('');

    const { signUp, loadingAuth, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (username !== '' && email !== '' && senha !== '') {
            await signUp(email, senha, username);
            navigate("/dashboard");
        }

    }

    return (
        <main id="cadastro-page" className="d-flex justify-content-center align-items-center" >
            <section className="estilo-geral col-md-4 col-sm-8 col-10 d-flex flex-column justify-content-between pb-4">
                <article className="body-titulo">
                    <h2 className="text-center">Cadastro</h2>
                </article>
                <article className="d-flex flex-column px-5 py-4">

                        <input type="text" class="form-control my-2"  value={username} onChange={(e) => setUsername(e.target.value)} id="floatingInput" placeholder="Insira seu username"/>
                        <hr></hr>
                        <input type="email" class="form-control my-2"  value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput1" placeholder="name@example.com"/>
                         
                        <input type="password" class="form-control my-2"  value={senha} onChange={(e) => setSenha(e.target.value)} id="floatingInput2" placeholder="Insira sua senha"/>
                         

                    <button type="submit" className="btn botao-cadastro" onClick={handleSubmit}>Cadastrar</button>
                </article>
                <article className="d-flex flex-column justify-content-end align-items-center">
                    <small>Ja tem uma conta?</small>
                    <Link className="botao-link" to="/login">Entrar</Link>
                </article>
            </section>
        </main>
    )
}

export default Cadastro;