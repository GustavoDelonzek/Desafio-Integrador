import React, { useState, useEffect, useContext } from "react"
import "./style.css"

import { SuasReservasContext } from "../../contexts/suasReservas";

//header
import Header from "../../components/Header";

function SuasReservas() {
    const { reservas, excluirReserva } = useContext(SuasReservasContext)
    const [agendamentoId, setAgendamentoId] = useState('');
    const [agendamentoDia, setAgendamentoDia] = useState('');
    const [agendamentoHorario, setAgendamentoHorario] = useState('');
    const [modeloId, setModeloId] = useState('');
    

    function excluir(e){
        e.preventDefault();
        if(agendamentoDia !== "" && agendamentoId !== "" && agendamentoHorario !== "" && modeloId !== ""){
            
        excluirReserva(agendamentoId, modeloId, agendamentoDia, agendamentoHorario);
        }

    }


    return (
        <>
            <Header />
            <section id="suas-reservas">
                {reservas.length > 0 ? (
                    reservas.map((reserva) => (
                        <div className="p-4" key={reserva.id}>
                            <div className="card">
                                <div className="card-header">
                                    Reserva
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Datashow: {reserva.modelo}</h5>
                                    <p className="py-0 m-0">Dia: {reserva.dia} </p>
                                    <p className="py-0 m-0">Horario: {reserva.horario}</p>
                                    {reserva.modeloId === modeloId ? (
                                        <button className="btn btn-danger" onClick={excluir}>Excluir</button>
                                    ): (
                                        <button className="btn btn-primary my-1" onClick={() => {
                                            setAgendamentoId(reserva.id);
                                            setAgendamentoDia(reserva.dia);
                                            setAgendamentoHorario(reserva.horario);
                                            setModeloId(reserva.modeloId);
                                        }}>Selecionar reserva</button>
                                    ) }
                                    

                                </div>

                            </div>
                        </div>

                    ))
                ) : (
                    <div  className="d-flex erro-reserva justify-content-center align-items-center">
                        <p>Você ainda não realizou nenhuma reserva!</p>
                    </div>
                )}
            </section>
        </>

    )
}

export default SuasReservas;