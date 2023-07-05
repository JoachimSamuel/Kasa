import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return ( 
        <nav className="navbar">
            <div><a href="">LOGO</a>
            <ul className="lien">
                <li>
                    <Link to="/" className="lien">Acceuil</Link>
                </li>
                <li>
                    <Link to="/A-Propos" className="lien">A Propos</Link>
                </li>
                
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;