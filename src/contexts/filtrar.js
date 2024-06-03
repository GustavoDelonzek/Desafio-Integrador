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
export const FiltrarContext = createContext({});

function FiltrarProvider({ children }) {
    const { user } = useContext(AuthContext);
    const [chamadosNti, setChamadosNti] = useState([]);

    const [chamadosFiltrados, setChamadosFiltrados] = useState([]);


    useEffect(() => {

        async function loadChamado() {

            const unsub = onSnapshot(collection(db, "chamados"), (snapshot) => {
                let listaChamados = [];

                snapshot.forEach((documento) => {

                    listaChamados.push({
                        id: documento.id,
                        categoria: documento.data().categoria,
                        sala: documento.data().sala,
                        bloco: documento.data().bloco,
                        descricao: documento.data().descricao,
                        itemDefeito: documento.data().itemDefeito,
                        data: documento.data().data.toDate(),
                        usuario: documento.data().usuario,
                        resposta: documento.data().resposta,
                        dataResposta: documento.data().dataResposta ? documento.data().dataResposta.toDate() : null
                    });
                })

                setChamadosNti(listaChamados);
            });
        }

        loadChamado();
    }, []);



    function chamadosRespondidos() {
        const respondidos = chamadosNti.filter(chamado => chamado.resposta !== null);
        setChamadosFiltrados(respondidos);
    }


async function filtragem(colecao, escolha) {
    try {
        const q = query(collection(db, "chamados"), where(colecao, "==", escolha));

        const qualquer = onSnapshot(q, async (querySnapshot) => {
            let listaChamados = [];

            querySnapshot.forEach((documento) => {

                listaChamados.push({
                    id: documento.id,
                    categoria: documento.data().categoria,
                    sala: documento.data().sala,
                    bloco: documento.data().bloco,
                    descricao: documento.data().descricao,
                    itemDefeito: documento.data().itemDefeito,
                    data: documento.data().data.toDate(),
                    usuario: documento.data().usuario,
                    resposta: documento.data().resposta,
                    dataResposta: documento.data().dataResposta ? documento.data().dataResposta.toDate() : null
                });
            })

            setChamadosFiltrados(listaChamados);
            if (listaChamados.length === 0) {
                alert("Nenhuma correspondência")
            }
        });


    } catch (error) {
        console.log(error)
    }
}





function cancelarFiltragem() {
    setChamadosFiltrados([]);
}

return (
    <FiltrarContext.Provider value={{
        chamadosNti,
        chamadosFiltrados,
        filtragem,
        cancelarFiltragem,
        chamadosRespondidos
    }}
    >
        {children}
    </FiltrarContext.Provider>
)

}

export default FiltrarProvider;