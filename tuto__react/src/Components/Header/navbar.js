import { Link } from 'react-router-dom';
import logo from "../images/logo_red.png";


const Navbar = () => {
    
    return ( 
        <header>
            <nav className="navbar">
                <img src={logo} alt="logo kasas red" className='logo-red' />
                <ul>
                    <li>
                        <Link to="/" className="lien">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/A-Propos" className="lien">A Propos</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;