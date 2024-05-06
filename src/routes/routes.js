import { Link, Route, BrowserRouter, Routes} from "react-router-dom";

//Páginas
import Home from "../pages/Home"

//Componentes
import Header from "../components/Header"

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;