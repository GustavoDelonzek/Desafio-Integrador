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
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Filtrar por: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="adicionar1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="row needs-validation">
                                <div className="col-6 p-1 d-flex justify-content-around">
                                <button className="btn btn-primary px-4" type="button">Bloco</button>
                                <button className="btn btn-primary px-4" type="button">Categoria</button>
                                </div>
                                <div className="col-6 p-1 d-flex justify-content-around">
                                 
                                <button className="btn btn-primary px-4" type="button">Item</button>
                                <button className="btn btn-primary px-4" type="button">Data</button>
                                </div>
                               

                                <hr className="mt-4"></hr>
                            
                            </form>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default FiltrarChamado;