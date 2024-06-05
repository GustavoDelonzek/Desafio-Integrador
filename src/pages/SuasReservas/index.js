import React, { useState, useEffect, useContext } from "react"
import "./style.css"

import { SuasReservasContext } from "../../contexts/suasReservas";

//header
import Header from "../../components/Header";

function SuasReservas() {
    const { reservas} = useContext(SuasReservasContext)




    return (
        <>
            <Header />
            <section id="suas-reservas">
                {reservas ? (
                    reservas.map((reserva) => (
                        reserva.modelo
                    ))
                ): (
                    "Sem reservas"
                )}
            </section>
        </>

    )
}

export default SuasReservas;