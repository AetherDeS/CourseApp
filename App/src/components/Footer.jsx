import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <ul className="footerLinks">
                <li><NavLink className="headerLink" to="/">Home</NavLink></li>
                <li><NavLink className="headerLink" to="/signup">SignUp</NavLink></li>
                <li><NavLink className="headerLink" to="/login">Login</NavLink></li>
                <li><NavLink className="headerLink" to="/lolMeme">Not Found</NavLink></li>
            </ul>
        </div>
    )
}
export default Footer;