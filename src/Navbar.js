import {Link} from "react-router-dom"
import './App.css';

export const Navbar = () => {
    return (
        <div>
        <Link to ="/" className="NavBarElement">Home</Link>
        <Link to ="/menu" className="NavBarElement"> Menu</Link>
        <Link to ="/contact" className="NavBarElement">Contact</Link>
      </div>
    );
}