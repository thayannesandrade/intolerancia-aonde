import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <ul className="menu">
            <li className="item">
                <Link className="link" to="/">Home</Link>
            </li>
            <li className="item">
                <Link className="link" to="/lista-de-locais">Lista de Locais</Link>
            </li>
            <li className="item">
            <Link className='link' to="/cadastro-de-locais">Cadastro de Locais</Link>
            </li>
            <li className="item">
            <Link className='link' to="/sobre">Sobre</Link>
            </li>
        </ul>
    )
}

export default Navbar
