import React, { useState, useEffect, useContext } from "react";

function FiltrarChamado() {
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
                <button className="btn btn-crud-chamado py-1" data-bs-toggle="modal" data-bs-target="#adicionar">
                    Filtrar
                </button>
            </div>

            <div className="modal fade" id="adicionar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Criar chamado</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="adicionar1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation">
                                

                                <div className="col-md-3">
                                    <label className="form-label">Bloco:</label>
                                    <select id="select-bloco" className="form-select"  aria-label="Default select example">
                                        <option value="" hidden disabled>
                                            Bloco
                                        </option>
                                        {blocos.map((opcao) => (
                                            <option value={opcao.value} >{opcao.label}</option>
                                        ))}
                                    </select>
                                </div>

                    

                                <div className="col-12 d-flex justify-content-center my-2">
                                    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal" >Filtrar</button>
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