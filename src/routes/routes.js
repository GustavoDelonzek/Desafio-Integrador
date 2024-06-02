import { Link, Route, BrowserRouter, Routes} from "react-router-dom";

//Páginas
import Home from "../pages/Home"

//Componentes
import Header from "../components/Header"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro";

//Context
import ChamadoCrudProvider from "../contexts/chamadoCrud";
import FiltrarProvider from "../contexts/filtrar";
import { AuthContext } from "../contexts/authDetails";
import Private from "../routes/private";
import { useContext } from "react";
function RoutesApp(){
    const {user} = useContext(AuthContext);

    return(
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Private>
                  
                    <ChamadoCrudProvider> <FiltrarProvider><Dashboard/></FiltrarProvider>
                        </ChamadoCrudProvider>
                    
                </Private>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
    )
}

export default RoutesApp;