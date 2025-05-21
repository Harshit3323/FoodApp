import Logo from "url:../assets/Logo.png";

const Header = () => {
  return (
    <div className="Header">
      <a href="#" className="Logo">
        <img src={Logo}></img>
      </a>
      <div className="NavBar">
        <ul className="Nav-Links">
          <li>Home</li>
          <li>Categories</li>
        </ul>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
