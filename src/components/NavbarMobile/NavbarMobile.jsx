import { Link } from 'react-router-dom'
import { Container } from './navbarMobile.style'
import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react'



function NavbarMobile({ navbarisVisible, setNavbarIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = navbarisVisible ? 'hidden' : 'auto'
        
    }, [navbarisVisible])
    return (
        <>
            <Container isVisible={navbarisVisible}>
               <IoClose size={45} color="#fff" onClick={() => setNavbarIsVisible(false)}/>
                <nav>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/lista-de-locais">Lista de Locais</Link>
                    <Link className='link' to="/cadastro-de-locais">Cadastro de Locais</Link>
                    <Link className='link' to="/sobre">Sobre</Link> 
                </nav>
            </Container>
        </>
    )
}

export default NavbarMobile