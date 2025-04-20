import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
        <button className="btn" onClick={()=>{btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
      </div>
    );
  };

  export default Header;