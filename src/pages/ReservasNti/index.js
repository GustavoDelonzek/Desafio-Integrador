import React, { useState, useEffect, useContext } from "react"
import "./style.css"

import { TodasReservasContext } from "../../contexts/todasReservas";

//header
import Header from "../../components/Header";



function ReservasNti() {
    const { todasReservas } = useContext(TodasReservasContext);


    return (
        <>
            <Header />
            <section id="todas-reservas">
                {todasReservas.length > 0 ? (
                    todasReservas.map((reserva) => (
                        <div className="p-4" key={reserva.id}>
                            <div className="card">
                                <div className="card-header">
                                    Reserva
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Datashow: {reserva.modelo}</h5>
                                    <p className="py-0 m-0">Dia: {reserva.dia} </p>
                                    <p className="py-0 m-0">Horario: {reserva.horario}</p>
                                    <h6>Usuario: {reserva.usuario}</h6>
                                </div>

                            </div>
                        </div>

                    ))
                ) : (
                    <div  className="d-flex sem-reserva text-danger justify-content-center align-items-center">
                        <p>Sem reservas para esta semana!</p>
                    </div>
                )}
            </section>
        </>

    )
}

export default ReservasNti;