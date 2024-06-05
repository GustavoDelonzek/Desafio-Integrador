import React, { useContext, useState, useEffect} from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { BsClock } from "react-icons/bs";
import ListarChamado from "../../components/ListarChamados";
import { AuthContext } from "../../contexts/authDetails";
import DashboardNti from "../../components/DashboardNti";
function Dashboard() {
    const {user} = useContext(AuthContext);
    


    return (
        <>

            <Header></Header>
            <main id="dashboard" className="py-4" >
                {user.cargo == "professor" || user.cargo == "aluno" ? (     
                    <ListarChamado/>
                ): (
                    <DashboardNti/>
                )}
                
            </main>
        </>


    )
}

export default Dashboard;