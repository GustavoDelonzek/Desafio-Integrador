import { Link, Route, BrowserRouter, Routes} from "react-router-dom";

//Páginas
import Home from "../pages/Home"

//Componentes
import Header from "../components/Header"
import Dashboard from "../pages/Dashboard";
import Chamados from "../pages/Chamados";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro";

function RoutesApp(){
    return(
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/chamados" element={<Chamados/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
    )
}

export default RoutesApp;