import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { ChamadoCrudContext } from "../../contexts/chamadoCrud";
import { set } from "firebase/database";


function AddChamado() {
    const { salas, carregarSalas, handleAdd } = useContext(ChamadoCrudContext)
    const [bloco, setBloco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [itemDefeito, setItemDefeito] = useState('');


    const [salaLocal, setSalaLocal] = useState('')

    useEffect(() => {
        if (bloco) {
            carregarSalas(bloco);
            setSalaLocal("");
        }
    }, [bloco]);

    async function addChamado(e){
        e.preventDefault();

        if(bloco !== '' && salaLocal !== '' && categoria !== '' && descricao !== '' && itemDefeito !== ''){
            try{
                await handleAdd(categoria, descricao, itemDefeito, bloco, salaLocal)
            setBloco('');
            setSalaLocal('');
            setCategoria('');
            setDescricao('');
            setItemDefeito('');
            } catch(error){
                console.error("Erro ao adicionar chamado: ", error)
            }
            
            
        } else{
            alert("Preencha todos os campos corretamente!")
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
                <button className="btn btn-crud-chamado py-1" data-bs-toggle="modal" data-bs-target="#adicionar">
                    Adicionar
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
                                <div className="col-md-6">
                                    <label for="validationCustom01" className="form-label">Categoria:</label>
                                    <input type="text" className="form-control" id="validationCustom01" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label for="validationCustom03" className="form-label">Item com defeito: </label>
                                    <input type="text" className="form-control" id="validationCustom03" value={itemDefeito} onChange={(e) => setItemDefeito(e.target.value)}/>
                                </div>
                                <div className="col-md-12">
                                    <label for="validationCustom02" className="form-label">Descricao: </label>
                                    <input type="text" className="form-control" id="validationCustom02" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                                </div>
                                
                                <div className="col-md-3">
                                    <label className="form-label">Bloco:</label>
                                    <select id="select-bloco" className="form-select" value={bloco} onChange={(e) => setBloco(e.target.value)} aria-label="Default select example">
                                    <option value="" hidden disabled>
                                                Bloco
                                            </option>
                                        {blocos.map((opcao) => (
                                            <option value={opcao.value} >{opcao.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {bloco ? (
                                    <div className="col-md-3">
                                        <label className="form-label">Sala:</label>
                                        <select id="select-sala" className="form-select" value={salaLocal} onChange={(e) => setSalaLocal(e.target.value)} aria-label="Default select example">
                                            <option value="" hidden disabled>
                                                Sala
                                            </option>
                                            {salas.map((opcao) => (
                                                <option value={opcao.value} >{opcao.sala}</option>
                                            ))}
                                        </select>
                                    </div>
                                ) : (
                                    <fieldset disabled className="col-md-3">
                                        <label className="form-label">Sala</label>
                                        <select id="teste" className="form-select" onChange={(e) => setSalaLocal(e.target.value)} aria-label="Default select example">

                                        </select>
                                    </fieldset>

                                )

                                }


                                <div className="col-12 d-flex justify-content-center my-2">
                                    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal" onClick={addChamado}>Adicionar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddChamado;