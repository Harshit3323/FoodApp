import Logo from "url:../assets/logo.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="Logo">
        <img src={Logo} alt=";lkajsdf"></img>
      </Link>
      <div className="NavBar">
        <ul className="Nav-Links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="categories">Categories</Link>
          </li>
        </ul>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
