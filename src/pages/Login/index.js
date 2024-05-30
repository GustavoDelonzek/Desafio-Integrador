import React, { useState, useEffect, useContext } from "react";
import '../Cadastro/style.css'
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../../contexts/authDetails"


function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [username, setUsername] = useState('');

    const { loadingAuth, signIn } = useContext(AuthContext);

    const navigate = useNavigate();


    async function handleSignIn(e) {
        e.preventDefault();

        if (email !== '' && senha !== '') {
            await signIn(email, senha);
            navigate("/dashboard");
        }

    }

    return (
        <main id="login-page" className="d-flex justify-content-center align-items-center">
            <section className="estilo-geral col-md-4 col-sm-8 col-10 d-flex flex-column justify-content-between pb-4">
                <article className="body-titulo"><h2 className="text-center">Login</h2></article>
                
                <article className="d-flex flex-column px-5 py-1">
                    <input type="email" className="form-control my-2" value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput1" placeholder="name@example.com" />

                    <input type="password" className="form-control my-2" value={senha} onChange={(e) => setSenha(e.target.value)} id="floatingInput2" placeholder="Insira sua senha" />

                    <button type="submit" className="btn botao-login" onClick={handleSignIn}>Entrar</button>
                </article>

                <article className="d-flex flex-column align-items-center">
                    <small>Não tem uma conta?</small>
                    <Link className="botao-link" to="/cadastro">Cadastre-se</Link>
                </article>
            </section>

        </main>
    )
}

export default Login;