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
    const { user, loading } = useContext(AuthContext);
    const [salas, setSalas] = useState([]);
    const [itens, setItens] = useState([])


    useEffect(() => {

        async function loadChamado() {
           
            const q = query(collection(db, "chamados"), where("usuario", "==", user.email));
        
            const unsub = onSnapshot(q, async (querySnapshot) => {
                let listaChamados = [];
    
                querySnapshot.forEach((documento) =>{
    
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
                })
    
                setChamado(listaChamados);
            });
        }
            
        loadChamado();   
    }, []);


    async function carregarSalas(bloco) {
        try {
            const q = query(collection(db, "salas"), where("bloco", "==", bloco))
            const querySnapshot = await getDocs(q);
            const listaSalas = [];
            querySnapshot.forEach((doc) => {
                listaSalas.push(
                    {
                        sala: doc.data().sala,
                        value: doc.data().sala
                    }
                )
            })
            setSalas(listaSalas)

        } catch (error) {
            console.log(error)
        }
    }
    
    async function carregarItens(categoria) {
        try {
            const q = query(collection(db, "item"), where("categoria", "==", categoria))
            const querySnapshot = await getDocs(q);
            const listaItens = [];
            querySnapshot.forEach((doc) => {
                listaItens.push(
                    {
                        item: doc.data().item,
                        value: doc.data().item
                    }
                )
            })
            setItens(listaItens)

        } catch (error) {
            console.log(error)
        }
    }


    async function handleAdd(categoria, descricao, itemDefeito, bloco, sala) {

        await addDoc(collection(db, "chamados"), {
            categoria: categoria,
            usuario: user.email,
            descricao: descricao,
            data: new Date(),
            itemDefeito: itemDefeito,
            bloco: bloco,
            sala: sala
        })
            .then(() => {
                console.log("CADASTRADO COM SUCESSO")
            })
            .catch((error) => {
                console.log("ERRO " + error);
            })


    }

    async function excluirChamado(id) {
        const docRef = doc(db, "chamados", id);
        await deleteDoc(docRef)
            .then(() => {

                alert("CHAMADO DELETADO COM SUCESSO!");
            })
    }

    async function editarChamado(id, categoria, descricao, itemDefeito, bloco, sala) {
        const docRef = doc(db, "chamados", id);
        await updateDoc(docRef, {
            categoria: categoria,
            descricao: descricao,
            itemDefeito: itemDefeito,
            bloco: bloco,
            sala: sala
        }).then(() => {
            alert('Atualizado com sucesso')
        })
    }


    return (
        <ChamadoCrudContext.Provider value={{
            handleAdd,
            excluirChamado,
            chamado,
            salas,
            carregarSalas,
            carregarItens,
            itens,
            editarChamado,
        }}
        >
            {children}
        </ChamadoCrudContext.Provider>
    )

}

export default ChamadoCrudProvider;