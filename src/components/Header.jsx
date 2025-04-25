import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <ul>
          <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
        </ul>
        <button className="btn" onClick={()=>{btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
      </div>
    );
  };

  export default Header;