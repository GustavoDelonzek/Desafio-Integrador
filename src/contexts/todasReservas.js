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

export const TodasReservasContext = createContext({});

function TodasReservasProvider({ children }) {
    const { user } = useContext(AuthContext);
    const [todasReservas, setTodasReservas] = useState([])

    
        useEffect(() => {
            async function pesquisarTodasReservas() {
    
                const q = query(collection(db, "agendamentos"));
    
                const unsube = onSnapshot(q, async (querySnapshot) => {
                    let listaReservas = [];
    
                    querySnapshot.forEach((documento) => {
    
                        listaReservas.push({
                            id: documento.id,
                            modelo: documento.data().modelo,
                            dia: documento.data().dia,
                            horario: documento.data().horario,
                            modeloId: documento.data().modeloId,
                            usuario: documento.data().usuario,
                        });
                    })
    
                    setTodasReservas(listaReservas);
                });
            }
    
            pesquisarTodasReservas();
        }, []);

        return (
            <TodasReservasContext.Provider value={{
                todasReservas,
            }}
            >
                {children}
            </TodasReservasContext.Provider>
        )
    }

export default TodasReservasProvider;