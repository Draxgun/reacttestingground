import {Link} from "react-router-dom"
import './App.css';

export const Navbar = () => {
    return (
        <div>
        <Link to ="/" className="NavBarElement">Home</Link>
        <Link to ="/profile" className="NavBarElement">Profile</Link>
        <Link to ="/contact" className="NavBarElement">Contact</Link>
      </div>
    );
}