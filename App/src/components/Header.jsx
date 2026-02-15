import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="Logo"/>
            <NavLink className="headerLink" to="/">Home</NavLink>
            <NavLink className="headerLink" to="/signup">SignUp</NavLink>
            <NavLink className="headerLink" to="/login">Login</NavLink>
            <NavLink className="headerLink" to="/hdas6a7d">Not Found</NavLink>
        </div>
    )
}

export default Header;