import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return ( 
        <header>
            <nav className="navbar">
                <a href="">LOGO</a>
                <ul>
                    <li>
                        <Link to="/" className="lien">Acceuil</Link>
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