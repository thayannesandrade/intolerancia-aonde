import { Link } from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri';
import { Container } from './navbar.style';

import LOGO from '../../assets/logo1.png'

function Navbar({ setNavbarIsVisible }) {
    return(
        <>
        <Container>
            <div className='logo'>
                <img src={LOGO} alt="logo intolerânciaAonde" />
            </div>
            <nav className='navbar'>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/lista-de-locais">Lista de Locais</Link>
                <Link className='link' to="/cadastro-de-locais">Cadastro de Locais</Link>
                <Link className='link' to="/sobre">Sobre</Link> 
            </nav>

            <div>
                <RiMenu3Fill size={45} onClick={() => setNavbarIsVisible(true)} className="mobile"/> 
            </div>
        </Container>
        </>
    )
}

export default Navbar
