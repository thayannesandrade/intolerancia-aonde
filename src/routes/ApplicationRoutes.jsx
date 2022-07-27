import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CadastroDeLocais from '../pages/CadastrodeLocais/CadastroDeLocais'
import ListaDeLocais from '../pages/ListaDeLocais/ListaDeLocais'
import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
                <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="lista-de-locais" element={<ListaDeLocais />} />
                <Route path="cadastro-de-locais" element={<CadastroDeLocais />} />
                <Route path="sobre" element={<Sobre />} />
            </Routes>
                <Footer />
            
        </BrowserRouter>
    ) 
}












export default ApplicationRoutes