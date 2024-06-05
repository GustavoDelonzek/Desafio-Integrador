import React, { useState, useEffect, useContext } from "react";
import { ChamadoCrudContext } from "../../contexts/chamadoCrud";

import imagem from "../../assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg"
import { IoMdCloseCircle } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";


import AddChamado from "../../components/AddChamado";


function ListarChamado() {

    const { chamado, excluirChamado, salas, editarChamado, carregarSalas, itens, carregarItens } = useContext(ChamadoCrudContext);
    const [id, setId] = useState('')
    const [categoriaEdit, setCategoriaEdit] = useState('');
    const [descricaoEdit, setDescricaoEdit] = useState('');
    const [salaEdit, setSalaEdit] = useState('');
    const [itemDefeitoEdit, setItemDefeitoEdit] = useState('');
    const [blocoEdit, setBlocoEdit] = useState('');

    useEffect(() => {
        if (blocoEdit) {
            carregarSalas(blocoEdit);
            setSalaEdit("");
        }
    }, [blocoEdit]);

    useEffect(() => {
        if (categoriaEdit) {
            carregarItens(categoriaEdit);
            setItemDefeitoEdit("");
        }
    }, [categoriaEdit]);

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

    async function editar() {
        if (blocoEdit !== '' && salaEdit !== '' && categoriaEdit !== '' && descricaoEdit !== '' && itemDefeitoEdit !== '') {
            try {
                await editarChamado(id, categoriaEdit, descricaoEdit, itemDefeitoEdit, blocoEdit, salaEdit)
                setId('')
                setCategoriaEdit('')
                setDescricaoEdit('')
                setItemDefeitoEdit('')
                setBlocoEdit('')
                setSalaEdit('')

            } catch (error) {
                alert(error)
            }
        }
    }

    return (
        <>
            <section className="mb-4 container">
                <article className="d-flex justify-content-between">
                    <h3 className="cor-azul-escuro">Seus chamados({chamado.length}): </h3>

                    <AddChamado />
                </article>
            </section>
            <section className="p-1 container">
                {chamado && chamado.length > 0 ? (
                    <>
                        {chamado.map((element, index) => (
                            <div>
                                <div className="card mb-3" key={element.id}>
                                    <div className="row g-0">
                                        <div className="col-md-2 col-sm-4 col-12 back-azul-escuro d-flex justify-content-center flex-column align-items-center" >
                                            {element.resposta != null ? (
                                                <>   
                                                    <span className="cor-verde"><FaRegCheckCircle size={60} /></span>
                                                    <p className="cor-verde">Concluído</p>
                                                </>
                                            ) : (
                                                <>   
                                                <span className="cor-laranja"><CgDanger size={60} /></span>
                                                    <p className="cor-laranja">Em atendimento</p>
                                                </>

                                            )}

                                        </div>
                                        <div className="col-md-10 col-sm-8">
                                            <div className="card-body d-flex flex-column justify-content-between">
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <h3 className="card-title">Bloco {element.bloco} - {element.sala}</h3>
                                                        <button className="btn p-0 text-danger" data-bs-toggle="modal" data-bs-target={`#deletar${index}`}><IoMdCloseCircle size={25} /></button>
                                                        <div class="modal fade" id={`deletar${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <div class="modal-content">
                                                                    <div class="modal-body">
                                                                        Tem certeza que deseja excluir este chamado?
                                                                    </div>
                                                                    <div class="modal-footer d-flex justify-content-center">
                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>

                                                                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => excluirChamado(element.id)}>Excluir</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                </div>
                                                <p className="card-text">Categoria: {element.categoria}</p>
                                                <p className="card-text">Item: {element.itemDefeito}</p>
                                                <p className="card-text">{element.descricao}</p>
                                                <div className="row">
                                                    <p className="card-text col-lg-6"  >
                                                        <small className="text-body-secondary">{element.data.toLocaleString()} - {element.usuario}</small>
                                                    </p>
                                                    <div className="col-lg-6 d-flex botoes-edicao">
                                                        {element.resposta != null ? (
                                                            <p>Respondida</p>
                                                        ) : (
                                                            <button className="btn btn-crud-chamado " type="button" data-bs-toggle="modal" data-bs-target={`#editar${index}`} onClick={() => {
                                                                setId(element.id);
                                                                setCategoriaEdit(element.categoria)
                                                                setDescricaoEdit(element.descricao);
                                                                setSalaEdit(element.sala);
                                                                setItemDefeitoEdit(element.itemDefeito);
                                                                setBlocoEdit(element.bloco)
                                                            }}>Editar</button>

                                                        )}
                                                    </div>
                                                    <div className="modal fade" id={`editar${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Edite seu chamado</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form className="row">

                                                                        <h6>Selecione tudo para editar: </h6>
                                                                        <div className="col-md-6">
                                                                            <label className="form-label">categoria:</label>
                                                                            <select id="select-item" className="form-select" value={categoriaEdit} onChange={(e) => setCategoriaEdit(e.target.value)} aria-label="Default select example">
                                                                                <option value="" hidden disabled>
                                                                                    Categoria
                                                                                </option>
                                                                                {categorias.map((opcao) => (
                                                                                    <option value={opcao.value} >{opcao.label}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <label className="form-label">Item:</label>
                                                                            <select id="select-item" className="form-select" value={itemDefeitoEdit} onChange={(e) => setItemDefeitoEdit(e.target.value)} aria-label="Default select example">
                                                                                <option value="" hidden disabled>
                                                                                    Item
                                                                                </option>
                                                                                {itens.map((opcao) => (
                                                                                    <option value={opcao.value} >{opcao.item}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>

                                                                        <div className="col-md-12">
                                                                            <label for="validationCustom02" className="form-label">Descricao: </label>
                                                                            <input type="text" className="form-control" id="validationCustom02" value={descricaoEdit} onChange={(e) => setDescricaoEdit(e.target.value)} />
                                                                        </div>

                                                                        <hr className="mt-4"></hr>
                                                                        <div className="col-md-6">
                                                                            <label className="form-label">Bloco:</label>
                                                                            <select className="form-select" value={blocoEdit} onChange={(e) => setBlocoEdit(e.target.value)} aria-label="Default select example">
                                                                                <option value="" hidden disabled>
                                                                                    Bloco
                                                                                </option>
                                                                                {blocos.map((opcao) => (
                                                                                    <option value={opcao.value} >{opcao.label}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>

                                                                        {blocoEdit ? (
                                                                            <div className="col-md-6">
                                                                                <label className="form-label">Sala:</label>
                                                                                <select id="select-sala" className="form-select" value={salaEdit} onChange={(e) => setSalaEdit(e.target.value)} aria-label="Default select example">
                                                                                    <option value="" hidden disabled>
                                                                                        Sala
                                                                                    </option>
                                                                                    {salas.map((opcao) => (
                                                                                        <option value={opcao.value} >{opcao.sala}</option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>
                                                                        ) : (
                                                                            <fieldset disabled className="col-md-6">
                                                                                <label className="form-label">Sala</label>
                                                                                <select id="select-sala" className="form-select" onChange={(e) => setSalaEdit(e.target.value)} aria-label="Default select example">

                                                                                </select>
                                                                            </fieldset>

                                                                        )

                                                                        }


                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-crud-claro" data-bs-dismiss="modal" onClick={() => editar()}>Editar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {element.resposta ? (
                                    <div className="mb-4 card card-reposta-background border-0">
                                        <div className="card-body row resposta-card">
                                            <div className="col-md-2 text-center" style={{ padding: 0 }}>
                                                <h3 className="card-title ">Resposta:</h3>
                                                <p className="card-text text-muted">{element.dataResposta.toLocaleString()}</p>
                                            </div>
                                            <div className="col-md-8">
                                                <p style={{ fontSize: "18px" }}>{element.resposta}</p>
                                            </div>

                                        </div>
                                    </div>
                                ) : ""}
                            </div>
                        ))}
                    </>

                ) : (
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        Escreva seu primeiro chamado
                    </div>
                )}



            </section >
        </>
    )
}

export default ListarChamado;