import React, { useState, useEffect, useContext } from "react";
import { ChamadoCrudContext } from "../../contexts/chamadoCrud";

import imagem from "../../assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg"
import { IoMdCloseCircle } from "react-icons/io";

import AddChamado from "../../components/AddChamado";
import FiltrarChamado from "../FiltrarChamado";

function DashboardNti() {
    const { chamado, excluirChamado, salas, carregarSalas, adicionarResposta } = useContext(ChamadoCrudContext);
    const [id, setId] = useState('');
    const [categoriaEdit, setCategoriaEdit] = useState('');
    const [descricaoEdit, setDescricaoEdit] = useState('');
    const [salaEdit, setSalaEdit] = useState('');
    const [itemDefeitoEdit, setItemDefeitoEdit] = useState('');
    const [blocoEdit, setBlocoEdit] = useState('');
    const [respostaEdit, setRespostaEdit] = useState('');
    const [chamadoSelecionado, setChamadoSelecionado] = useState(null);

    useEffect(() => {
        if (blocoEdit) {
            carregarSalas(blocoEdit);
            setSalaEdit("");
        }
    }, [blocoEdit]);

    const blocos = [
        { label: "CT", value: "CT" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
    ];

    const handleRespostaChange = (e) => {
        setRespostaEdit(e.target.value);
    };

    const handleResponder = (chamado) => {
        setChamadoSelecionado(chamado);
        setRespostaEdit(chamado.resposta);
        setCategoriaEdit(chamado.categoria);
        setDescricaoEdit(chamado.descricao);
        setSalaEdit(chamado.sala);
        setItemDefeitoEdit(chamado.itemDefeito);
        setBlocoEdit(chamado.bloco);
        setId(chamado.id);
    };

    const salvarResposta = async () => {
        if (chamadoSelecionado) {
            await adicionarResposta(id, respostaEdit).then(() => window.location.reload());
        }
    };

    return (
        <>
            <section className="mb-4 container">
                <article className="d-flex justify-content-between">
                    <h3 className="cor-azul-escuro">Chamados({chamado.length}): </h3>
                    <FiltrarChamado />
                </article>
            </section>
            <section className="p-1 container">
                {chamado.map((element) => (
                    <div className="card mb-3 border-0" key={element.id}>
                        <div className="row g-0">
                            <div className="col-md-2 col-sm-4 col-12 maximo-imagem" >
                            </div>
                            <div className="col-md-10 col-sm-8">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <h3 className="card-title">Bloco {element.bloco} - {element.sala}</h3>
                                            <button className="btn p-0 text-danger" data-bs-toggle="modal" data-bs-target="#deletar"><IoMdCloseCircle size={25} /></button>
                                            <div className="modal fade" id="deletar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deletar" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-body">
                                                            Tem certeza que deseja excluir este chamado?
                                                        </div>
                                                        <div className="modal-footer d-flex justify-content-center">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => {
                                                                excluirChamado(element.id).then(() => window.location.reload())
                                                            }}>Excluir</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <p className="card-text">Categoria: {element.categoria}</p>
                                    <p className="card-text">{element.descricao}</p>
                                    <div className="row">
                                        <p className="card-text col-lg-6">
                                            <small className="text-body-secondary">{new Date(element.data).toLocaleString()} - {element.usuario}</small>
                                        </p>
                                        <div className="col-lg-6 d-flex botoes-edicao">
                                            <button className="btn btn-crud-chamado" type="button" data-bs-toggle="modal" data-bs-target="#responder" onClick={() => handleResponder(element)}>
                                            {element.resposta ? "Editar Resposta" : "Responder"}
                                            </button>
                                        </div>
                                        <div className="modal fade" id="responder" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Responder</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form className="row">
                                                            <div className="col-md-12">
                                                                <label htmlFor="validationCustom02" className="form-label">Resposta: </label>
                                                                <textarea type="text" className="form-control" id="validationCustom02" value={respostaEdit} onChange={handleRespostaChange} />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={salvarResposta}>Responder</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {element.resposta ? (
                            <div className="mt-1 mb-2 card border-0">
                                <div className="m-2 card-body row resposta-card">
                                <div className="col-md-2 text-end" style={{padding: 0}}>
                                        <h3 className="card-title ">Resposta:</h3>
                                        <p className="card-text text-muted">{element.dataResposta.toLocaleString()}</p>
                                    </div>
                                    <div className="col-md-8">
                                    <p style={{fontSize:"20px"}}>{element.resposta}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        ) : ""}


                    </div>
                ))}
            </section>
        </>
    );
}

export default DashboardNti;
