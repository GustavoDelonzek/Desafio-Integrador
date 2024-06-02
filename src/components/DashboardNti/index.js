import React, {useState, useEffect, useContext} from "react";
import {FiltrarContext } from "../../contexts/filtrar";

import imagem from "../../assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg"
import { IoMdCloseCircle } from "react-icons/io";

import FiltrarChamado from "../FiltrarChamado";


function DashboardNti() {
    const { chamadosNti, chamadosFiltrados, excluirChamado } = useContext(FiltrarContext);
    


    return (
        <>
            <section className="mb-4 container">
                <article className="d-flex justify-content-between">
                    <h3 className="cor-azul-escuro">Chamados({chamadosFiltrados.length === 0 ? (
                        
                        chamadosNti.length
                    ): (
                        chamadosFiltrados.length
                    )
                    }): </h3>

                    <FiltrarChamado />
                </article>
            </section>
            <section className="p-1 container">
                {chamadosFiltrados.length === 0 ? (
                    chamadosNti.map((element, index) => (
                        <div className="card mb-3" key={element.id}>
                            <div className="row g-0">
                                <div className="col-md-2 col-sm-4 col-12 maximo-imagem" >
                                </div>
                                <div className="col-md-10 col-sm-8">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h3 className="card-title">Bloco {element.bloco} - {element.sala}</h3>
                                                <button className="btn p-0 text-danger" data-bs-toggle="modal" data-bs-target={`#deletar${index}`} ><IoMdCloseCircle size={25} /></button>
                                                <div class="modal fade" id={`deletar${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                Tem certeza que deseja excluir este chamado?
                                                            </div>
                                                            <div class="modal-footer d-flex justify-content-center">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => {
                                                                    excluirChamado(element.id).then(() =>
                                                                        window.location.reload())
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
                                            <p className="card-text col-lg-6"  >
                                                <small className="text-body-secondary">{element.data.toLocaleString()} - {element.usuario}</small>
                                            </p>
                                            <div className="col-lg-6 d-flex botoes-edicao">
                                                <button className="btn btn-crud-chamado " type="button" data-bs-toggle="modal" data-bs-target="#responder">Responder</button>
                                            </div>
                                            <div className="modal fade" id="responder" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Responder</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form className="row">
                                                            <div className="col-md-12">
                                                                <label for="validationCustom02" className="form-label">Resposta: </label>
                                                                <textarea type="text" className="form-control" id="validationCustom02" />
                                                            </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Responder</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ):( chamadosFiltrados.map((element, index) => (
                        <div className="card mb-3" key={element.id}>
                            <div className="row g-0">
                                <div className="col-md-2 col-sm-4 col-12 maximo-imagem" >
                                </div>
                                <div className="col-md-10 col-sm-8">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h3 className="card-title">Bloco {element.bloco} - {element.sala}</h3>
                                                <button className="btn p-0 text-danger" data-bs-toggle="modal" data-bs-target={`#deletar${index}`} ><IoMdCloseCircle size={25} /></button>
                                                <div class="modal fade" id={`deletar${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                Tem certeza que deseja excluir este chamado?
                                                            </div>
                                                            <div class="modal-footer d-flex justify-content-center">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => {
                                                                    excluirChamado(element.id).then(() =>
                                                                        window.location.reload())
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
                                            <p className="card-text col-lg-6"  >
                                                <small className="text-body-secondary">{element.data.toLocaleString()} - {element.usuario}</small>
                                            </p>
                                            <div className="col-lg-6 d-flex botoes-edicao">
                                                <button className="btn btn-crud-chamado " type="button" data-bs-toggle="modal" data-bs-target="#responder">Responder</button>
                                            </div>
                                            <div className="modal fade" id="responder" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Responder</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form className="row">
                                                            <div className="col-md-12">
                                                                <label for="validationCustom02" className="form-label">Resposta: </label>
                                                                <textarea type="text" className="form-control" id="validationCustom02" />
                                                            </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Responder</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }



            </section>
        </>
    )
}

export default DashboardNti;