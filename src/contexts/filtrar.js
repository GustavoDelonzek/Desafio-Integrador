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

        async function fetchChamados() {
            if( chamadosFiltrados.length === 0){
                try {
                    const q = collection(db, "chamados");
                    const querySnapshot = await getDocs(q);
    
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
                            usuario: documento.data().usuario
                        });
                    });
                    setChamadosNti(listaChamados);
                } catch (error) {
                    console.error("Erro ao buscar chamados: ", error);
                }
            }
            
        }

        fetchChamados();
    }, []);


    async function filtrarBloco(bloco) {
        try {
            const q = query(collection(db, "chamados"), where("bloco", "==", bloco))
            const querySnapshot = await getDocs(q);
            const listaChamados = [];
            querySnapshot.forEach((doc) => {
                listaChamados.push(
                    {
                        id: doc.id,
                        categoria: doc.data().categoria,
                        sala: doc.data().sala,
                        bloco: doc.data().bloco,
                        descricao: doc.data().descricao,
                        itemDefeito: doc.data().itemDefeito,
                        data: doc.data().data.toDate(),
                        usuario: doc.data().usuario
                    }
                )
            })
            setChamadosFiltrados(listaChamados)

        } catch (error) {
            console.log(error)
        }
    }

    async function excluirChamado(id) {
        const docRef = doc(db, "chamados", id);
        await deleteDoc(docRef)
            .then(() => {

                alert("CHAMADO DELETADO COM SUCESSO!");
                return window.location.reload()
            })
    }


    function cancelarFiltragem(){
        setChamadosFiltrados([])
    }

    return (
        <FiltrarContext.Provider value={{
            chamadosNti,
            chamadosFiltrados,
            filtrarBloco,
            excluirChamado,
            cancelarFiltragem
        }}
        >
            {children}
        </FiltrarContext.Provider>
    )

}

export default FiltrarProvider;