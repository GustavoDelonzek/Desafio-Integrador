import { Link, Route, BrowserRouter, Routes} from "react-router-dom";

//Páginas
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro";
import Reservas from "../pages/Reservas" 
import SuasReservas from "../pages/SuasReservas";
import ReservasNti from "../pages/ReservasNti";

//Componentes
import Header from "../components/Header"

//Context
import ChamadoCrudProvider from "../contexts/chamadoCrud";
import FiltrarProvider from "../contexts/filtrar";
import { AuthContext } from "../contexts/authDetails";
import Private from "../routes/private";
import { useContext } from "react";
import VerificarDisponibilidadeProvider from "../contexts/verificaDisponibilidade";
import  SuasReservasProvider  from "../contexts/suasReservas";
import TodasReservasProvider from "../contexts/todasReservas";
function RoutesApp(){
    const {user} = useContext(AuthContext);

    return(
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Private>
                  
                    <ChamadoCrudProvider> <FiltrarProvider><Dashboard/></FiltrarProvider>
                        </ChamadoCrudProvider>
                    
                </Private>}/>
                <Route path="/reservas" element={<Private> <VerificarDisponibilidadeProvider> <Reservas/> </VerificarDisponibilidadeProvider></Private>}/>
                <Route path="/suas-reservas" element={<Private> <SuasReservasProvider> <SuasReservas/> </SuasReservasProvider></Private>}/>
                <Route path="/todas-reservas" element={<Private> <TodasReservasProvider> <ReservasNti/> </TodasReservasProvider></Private>}/>
                
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
    )
}

export default RoutesApp;