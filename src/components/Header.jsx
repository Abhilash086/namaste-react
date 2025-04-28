import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import MenuButton from "./MenuButton";
import { CartContext } from "../utils/CartContext.js";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);
  const {cartInfo} = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center shadow-lg px-4 sm:px-8">
      <div className="w-26">
        <Link to="/">
          <img src={LOGO_URL} alt="" />
        </Link>
      </div>
      <ul className={`gap-12 sm:flex sm:gap-6 ${isOpen ? "block" : "hidden"}`}>
        <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-4">
        <Link to="/cart" className="text-lg mx-3 cursor-pointer relative">
          <p className={`text-[12px] absolute -z-1 -top-3 -right-4 ${cartInfo.cartQuantity === 0 && "hidden"} bg-black text-white font-semibold rounded-lg w-6 text-center h-6 p-[4px]`}>
            {cartInfo.cartQuantity}
          </p>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <button
          className="border border-black py-1 px-4 rounded-md cursor-pointer"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
