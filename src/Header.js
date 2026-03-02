import Logo from "url:../assets/logo.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between px-25 py-6 items-center sticky top-0 bg-white/75 ">
      <Link to="/" className="">
        <img src={Logo} alt=";lkajsdf" className="w-25"></img>
      </Link>
      <div className="NavBar">
        <ul className="flex gap-8 p-4 font-bold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="categories">About</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <button className="bg-">Log In</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
