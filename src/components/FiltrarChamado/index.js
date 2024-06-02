import React, { useState, useEffect, useContext } from "react";

import { FiltrarContext } from "../../contexts/filtrar";


function FiltrarChamado() {
    const { chamadosNti, chamadosFiltrados, filtrarBloco, cancelarFiltragem } = useContext(FiltrarContext);

    const [blocoFilt, setBlocoFilt] = useState('')

    async function filtroblocos(e){
        e.preventDefault();

        if (blocoFilt !== ''){
            filtrarBloco(blocoFilt)
        }
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


    return (
        <div >
            <div className="d-flex justify-content-center px-4">
                {chamadosFiltrados.length === 0  ? (
                    <button className="btn btn-crud-chamado py-1" data-bs-toggle="modal" data-bs-target="#filtrar">
                    Filtrar
                </button>
                ) : (
                    <button className="btn btn-danger py-1" type="button" onClick={() => cancelarFiltragem()}>
                    Cancelar filtragem
                </button>
                )}
                
            </div>

            <div className="modal fade" id="filtrar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="filtragem" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation">
                                <div className="col-6 p-1 d-flex justify-content-around">
                                    <button className="btn btn-primary px-4" type="button" data-bs-toggle="modal" data-bs-target="#filtrarBloco">Bloco</button>
                                    <button className="btn btn-primary px-4" type="button" data-bs-toggle="modal" data-bs-target="#filtrarCategoria">Categoria</button>
                                </div>
                                <div className="col-6 p-1 d-flex justify-content-around">

                                    <button className="btn btn-primary px-4" type="button" data-bs-toggle="modal" data-bs-target="#filtrarItem">Item</button>
                                    <button className="btn btn-primary px-4" type="button" data-bs-toggle="modal" data-bs-target="#filtrarData">Data</button>
                                </div>


                                <hr className="mt-4"></hr>

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
                            <form id="filtrobloco" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="filtrar" aria-hidden="true" className="text-center needs-validation" onSubmit={filtroblocos}>
                                <div className="col-md-3">
                                    <label className="form-label">Bloco:</label>
                                    <select className="form-select" value={blocoFilt} onChange={(e) => setBlocoFilt(e.target.value)} aria-label="Default select example">
                                        <option value="" hidden disabled>
                                            Bloco
                                        </option>
                                        {blocos.map((opcao) => (
                                            <option value={opcao.value} >{opcao.label}</option>
                                        ))}

                                    </select>
                                </div>


                                <button type="submit" className="btn btn-primary " data-bs-dismiss="modal">Filtrar</button>
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
                            <form id="filtrobloco" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation">




                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="filtrarItem" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="filtrobloco" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation">




                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="filtrarData" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="filtrobloco" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation">




                            </form>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default FiltrarChamado;