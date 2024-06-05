import { React, useContext, useState, useEffect, createContext } from "react";
import { db, auth } from "../firebase/firebaseConnection"
import {
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
    Timestamp,
    arrayUnion,
    arrayRemove,
    where,
    query
} from 'firebase/firestore';

import { AuthContext } from "./authDetails";

export const VerificarDisponibilidadeContext = createContext({});

function VerificarDisponibilidadeProvider({ children }) {
    const {user } = useContext(AuthContext);
    const [ modelos, setModelos ]= useState([])

    async function queryDisponibilidade(dia, horario, bloco) {
        const disponibilidadePath = `disponibilidade.${dia}.${horario}`
        const q = query(collection(db, "datashows"), where("bloco", "==", bloco), where(disponibilidadePath, "==", true));
        const querySnapshot = await getDocs(q);
        const listaModelos = [];
        querySnapshot.forEach((doc) => {
            listaModelos.push(
                {
                    id: doc.id,
                    modelo: doc.data().modelo
                }
            )
        })
        setModelos(listaModelos)

    
    }

    async function agendarDataShow(agendamentoModelo, agendamentoDia, agendamentoHorario, agendamentoNomeModelo){
        
        try{
            const q = query(collection(db, "agendamentos"), where("usuario", "==", user.email), where("horario", "==", agendamentoHorario), where("dia", "==", agendamentoDia));
            const querySnapshot = await getDocs(q)

            if(!querySnapshot.empty) {
                alert("Você ja tem reserva pra essa data e horário. Verifique suas reservas!")
                return
            }
            
            await addDoc(collection(db, "agendamentos"), {
                modeloId: agendamentoModelo,
                modelo: agendamentoNomeModelo,
                usuario: user.email,
                dia: agendamentoDia,
                horario: agendamentoHorario,
            })

            const modeloDocRef = doc(db, "datashows", agendamentoModelo);
            const atualizar = {
                [`disponibilidade.${agendamentoDia}.${agendamentoHorario}`]: false
            };

            await updateDoc(modeloDocRef, atualizar)

            alert("Agendamento realizado!!!!")
        } catch (error) {
            console.error("Erro ao agendar: ", error)
        }
    }



    return (
        <VerificarDisponibilidadeContext.Provider value={{
            queryDisponibilidade,
            modelos,
            agendarDataShow
        }}
        >
            {children}
        </VerificarDisponibilidadeContext.Provider>
    )

}

export default VerificarDisponibilidadeProvider;