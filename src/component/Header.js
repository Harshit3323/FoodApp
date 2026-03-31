import { Link } from "react-router";
import { useContext } from "react";
import UserInfo from "../utils/userInfo";
import { useSelector } from "react-redux";
const Header = () => {
  const { name } = useContext(UserInfo);
  const cartItem = useSelector((state) => state.cart.items);
  return (
    <div className="flex justify-between px-25 py-6 items-center sticky top-0 bg-white/75 ">
      <Link to="/" className="">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
          alt=";lkajsdf"
          className="w-25"
        ></img>
      </Link>
      <div className="NavBar">
        <ul className="flex gap-8 p-4 font-bold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItem.length}</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li>
            <button className="bg-">Log In</button>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
