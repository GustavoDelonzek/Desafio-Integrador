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


import Private from "../routes/private";
function RoutesApp(){
    return(
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Private><ChamadoCrudProvider><Dashboard/></ChamadoCrudProvider></Private>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
    )
}

export default RoutesApp;