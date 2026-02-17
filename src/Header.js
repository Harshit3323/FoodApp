import Logo from "url:../assets/logo.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between mx-25 my-6 items-center">
      <Link to="/" className="">
        <img src={Logo} alt=";lkajsdf" className="w-25"></img>
      </Link>
      <div className="NavBar">
        <ul className="flex gap-8 p-4 font-bold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="categories">Categories</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
