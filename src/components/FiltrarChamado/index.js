import React, { useState, useEffect, useContext } from "react";

import { FiltrarContext } from "../../contexts/filtrar";
import { BlockReason } from "firebase/vertexai-preview";


function FiltrarChamado() {
    const { chamadosNti, chamadosFiltrados, filtragem, cancelarFiltragem, chamadosRespondidos } = useContext(FiltrarContext);

    const [escolhaFilt, setEscolhaFilt] = useState('')
    const [collection, setCollection] = useState('')

    async function filtro(e){
        e.preventDefault();

        if (escolhaFilt !== '' && collection !== ''){
            filtragem(collection, escolhaFilt);
        } 
    }

    async function respondidos(e){
        e.preventDefault();
        chamadosRespondidos();
    }

    const blocos = [
        {
            label: "CT",
            value: "CT",
        },
        {
            label: "1",
            value: "1",
        },
        {
            label: "2",
            value: "2",
        },
        {
            label: "3",
            value: "3",
        },
    ];

    const categorias = [
        {
            label: "hardware",
            value: "hardware",
        },
        {
            label: "software",
            value: "software",
        },
        {
            label: "periferico",
            value: "periferico",
        },
        {
            label: "estrutura",
            value: "estrutura",
        }
    ];


    return (
        <div >
            <div className="d-flex justify-content-center px-4">
                {chamadosFiltrados.length === 0  ? (
                    <button className="btn btn-crud-chamado py-1" data-bs-toggle="modal" data-bs-target="#filtrarModal">
                    Filtrar
                </button>
                ) : (
                    <button className="btn btn-danger py-1" type="button" onClick={() => cancelarFiltragem()}>
                    Cancelar filtragem
                </button>
                )}
                
            </div>

            <div className="modal fade" id="filtrarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="filtragemM" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="d-flex justify-content-evenly needs-validation">
                                
                                    <button className="btn btn-primary " type="button" data-bs-toggle="modal" data-bs-target="#filtrarBloco" onClick={() => setCollection("bloco")}>Bloco</button>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#filtrarCategoria" onClick={() => setCollection("categoria")}>Categoria</button>
                                
                                

                                    <button className="btn btn-primary " type="button" data-bs-dismiss="modal" onClick={respondidos}>Respondida</button>
                                    

                            </form>
                        </div>

                    </div>
                </div>
            </div>


            <div className="modal fade" id="filtrarBloco" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="filtrobloco" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="filtrar" aria-hidden="true" className="needs-validation" onSubmit={filtro}>
                                <div className="">
                                    <label className="form-label">Bloco:</label>
                                    <select className="form-select" value={escolhaFilt} onChange={(e) => setEscolhaFilt(e.target.value)} aria-label="Default select example">
                                        <option value="" hidden disabled>
                                            Bloco
                                        </option>
                                        {blocos.map((opcao) => (
                                            <option value={opcao.value} >{opcao.label}</option>
                                        ))}

                                    </select>
                                </div>
                                    <hr></hr>
                                    <div className="text-center">
                                    <button type="submit" className="btn btn-primary " data-bs-dismiss="modal">Filtrar</button>
                                    </div>
                                
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="filtrarCategoria" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="filtroCat" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation" onSubmit={filtro}>


                            <div className="">
                                    <label className="form-label">Categoria:</label>
                                    <select className="form-select" value={escolhaFilt} onChange={(e) => setEscolhaFilt(e.target.value)} aria-label="Default select example">
                                        <option value="" hidden disabled>
                                            Categoria
                                        </option>
                                        {categorias.map((opcao) => (
                                            <option value={opcao.value} >{opcao.label}</option>
                                        ))}

                                    </select>
                                </div>
                                    <hr className="mt-4"></hr>
                                    <div className="text-center">
                                    <button type="submit" className="btn btn-primary " data-bs-dismiss="modal">Filtrar</button>
                                    </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default FiltrarChamado;