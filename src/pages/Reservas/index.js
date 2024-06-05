import React, { useState, useEffect, useContext } from "react"
import { VerificarDisponibilidadeContext } from "../../contexts/verificaDisponibilidade";
import "./style.css"
//header
import Header from "../../components/Header";

function Reservas() {
    const { queryDisponibilidade, modelos, agendarDataShow } = useContext(VerificarDisponibilidadeContext)

    //Primeiro pesquisa
    const [pesquisa, setPesquisa] = useState(false)

    //Pesquisa
    const [dia, setDia] = useState("")
    const [horario, setHorario] = useState("")
    const [bloco, setBloco] = useState("")

    //Agendamento
    const [agendamentoDia, setAgendamentoDia] = useState('');
    const [agendamentoHorario, setAgendamentoHorario] = useState('');
    const [agendamentoModeloId, setAgendamentoModeloId] = useState('');
    const [agendamentoNomeModelo, setAgendamentoNomeModelo] = useState('')


    function pesquisarModelos(e) {
        e.preventDefault();

        if (dia !== "" && horario !== "" && bloco !== "") {
            setPesquisa(true)
            queryDisponibilidade(dia, horario, bloco);
            setAgendamentoDia(dia)
            setAgendamentoHorario(horario)
        } else {
            alert('Por favor, preencha todos os campos!')
        }

    }

    function agendarModelo() {
        if (agendamentoDia !== "" && agendamentoHorario !== "" && agendamentoModeloId !== "" && agendamentoNomeModelo !== "") {
            agendarDataShow(agendamentoModeloId, agendamentoDia, agendamentoHorario, agendamentoNomeModelo).then(() => window.location.reload())
        } else {
            console.error("Erro ao agendar modelo !!!!")
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
    const diasSemana = [
        {
            label: "Segunda",
            value: "segunda",
        },
        {
            label: "Terça",
            value: "terca",
        },
        {
            label: "Quarta",
            value: "quarta",
        },
        {
            label: "Quinta",
            value: "quinta",
        },
        {
            label: "Sexta",
            value: "sexta",
        },
    ];

    const diaHorario = [
        {
            label: "Primeiro horário: 19:00 às 20:40",
            value: "primeiroHorario",
        },
        {
            label: "Segundo Horário: 21:00 às 22:40",
            value: "segundoHorario"
        }
    ]




    return (
        <>
            <Header />
            <main id="reservas" className="container-fluid">
                <section className="container d-flex flex-column justify-content-center align-items-center pt-5">
                    <article>
                        <h2 className="cor-azul-escuro">Consultar Disponibilidade de Datashows</h2>
                        <form>
                            <div className="my-3">
                                <label className="form-label">Bloco:</label>
                                <select className="form-select" value={bloco} onChange={(e) => setBloco(e.target.value)} aria-label="Default select example">
                                    <option value="" hidden disabled>
                                        Bloco
                                    </option>
                                    {blocos.map((opcao) => (
                                        <option value={opcao.value} >{opcao.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="my-3">
                                <label className="form-label">Dia da semana:</label>
                                <select className="form-select" value={dia} onChange={(e) => setDia(e.target.value)} aria-label="Default select example">
                                    <option value="" hidden disabled>
                                        Dia
                                    </option>
                                    {diasSemana.map((opcao) => (
                                        <option value={opcao.value} >{opcao.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="my-3">
                                <label className="form-label">Horario:</label>
                                <select className="form-select" value={horario} onChange={(e) => setHorario(e.target.value)} aria-label="Default select example">
                                    <option value="" hidden disabled>
                                        Horário
                                    </option>
                                    {diaHorario.map((opcao) => (
                                        <option value={opcao.value} >{opcao.label}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-crud-chamado" onClick={pesquisarModelos}>Pesquisar</button>
                        </form>
                    </article>

                </section>
                <section className="container d-flex flex-column pt-4">
                    <article className="text-start">
                        {pesquisa ? (
                            modelos.length > 0 ? (
                                <>
                                    <p>Datashows disponíveis: </p>
                                    <ul className="list-group">
                                        {modelos.map((modelo) => (
                                            <li className="list-group-item d-flex justify-content-between" key={modelo.id}>
                                                {modelo.modelo}
                                                {agendamentoModeloId === modelo.id ? (

                                                    <div >
                                                        <button className=" mx-2 btn btn-danger" onClick={() => {setAgendamentoModeloId(""); setAgendamentoNomeModelo("")}}>Cancelar</button>
                                                        <button className="btn btn-warning" onClick={() => agendarModelo()}>Agendar</button>
                                                    </div>

                                                ) : (
                                                    <button className="btn btn-success" onClick={() => {setAgendamentoModeloId(modelo.id); setAgendamentoNomeModelo(modelo.modelo)}}>Selecionar</button>
                                                )}

                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <div className="text-danger text-center">Sem modelos disponiveis para essa data e horario !</div>
                            )

                        ) : (
                            ''
                        )}

                    </article>


                </section>
            </main>
        </>

    )
}

export default Reservas;