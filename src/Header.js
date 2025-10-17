import Logo from "url:../assets/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <a href="#" className="Logo">
        <img src={Logo} alt=";lkajsdf"></img>
      </a>
      <div className="NavBar">
        <ul className="Nav-Links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="categories">Categories</a>
          </li>
        </ul>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
