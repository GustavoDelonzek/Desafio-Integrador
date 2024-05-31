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
export const ChamadoCrudContext = createContext({});

function ChamadoCrudProvider({ children }) {
    const [chamado, setChamado] = useState([]);
    const { user } = useContext(AuthContext);

    
    useEffect(() => {
        async function loadChamado() {
            const unsub = onSnapshot(collection(db, "chamados"),  (snapshot) => {
                let listaChamados = [];
                snapshot.forEach( (documento) => {
                  
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
                setChamado(listaChamados);
              });
        }
        loadChamado();
    }, [])



    async function handleAdd(titulo, descricao) {
        if (titulo !== '' && descricao.length > 10) {
            await addDoc(collection(db, "artigos"), {
                titulo: titulo,
                autor: user.username,
                descricao: descricao,
                curtidas: [],
                horario: new Date()
            })
                .then(() => {
                    console.log("CADASTRADO COM SUCESSO")
                })
                .catch((error) => {
                    console.log("ERRO " + error);
                })
        } else {
            alert('Você deve inserir algo para cadastrar novo artigo. Ou respeitar o minimo de caracteres!')
        }

    }

    async function excluirArtigo(id) {
        const docRef = doc(db, "artigos", id);
        await deleteDoc(docRef)
            .then(() => {
                alert("TAREFA DELETADO COM SUCESSO!");
            })
    }


    return (
        <ChamadoCrudContext.Provider value={{
            handleAdd,
            excluirArtigo,
            chamado,
        }}
        >
            {children}
        </ChamadoCrudContext.Provider>
    )

}

export default ChamadoCrudProvider;