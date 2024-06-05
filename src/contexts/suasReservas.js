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

export const SuasReservasContext = createContext({});

function SuasReservasProvider({ children }) {
    const { user } = useContext(AuthContext);
    const [reservas, setReservas] = useState("")

    useEffect(() => {
        async function loadReservas() {

            const q = query(collection(db, "agendamentos"), where("usuario", "==", user.email));

            const unsube = onSnapshot(q, async (querySnapshot) => {
                let listaReservas = [];

                querySnapshot.forEach((documento) => {

                    listaReservas.push({
                        id: documento.id,
                        modelo: documento.data().modelo,
                        dia: documento.data().dia,
                        horario: documento.data().horario,
                        modeloId: documento.data().modeloId
                    });
                })

                setReservas(listaReservas);
            });
        }

        loadReservas();
    }, []);

    async function excluirReserva(agendamentoId, modeloId, agendamentoDia, agendamentoHorario) {
        try {
            const modeloDocRef = doc(db, "datashows", modeloId);
            const atualizar = {
                [`disponibilidade.${agendamentoDia}.${agendamentoHorario}`]: true
            };
            await updateDoc(modeloDocRef, atualizar)

            const agendamentoDocRef = doc(db, "agendamentos", agendamentoId);
            await deleteDoc(agendamentoDocRef).then(() => {
                alert("Deletado com sucesso")
            })
        } catch (error) {
            console.error("Erro ao excluir sua reserva: ", error)
        }


    }

    return (
        <SuasReservasContext.Provider value={{
            reservas,
            excluirReserva
        }}
        >
            {children}
        </SuasReservasContext.Provider>
    )

}

export default SuasReservasProvider;