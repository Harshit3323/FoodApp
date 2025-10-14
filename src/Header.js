const logo = require("../assets/logo.png");

const Header = () => {
  console.log(logo);
  return (
    <div className="Header">
      <a href="#" className="Logo">
        <img src="/logo.png"></img>
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
