import { useState,useContext } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link, useInRouterContext } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";
import userContext from "../utils/userContext"
import { useSelector } from "react-redux";
 const Header = () => {

  const[btn,setbtn] = useState("login")
  let Btnname = "Login";

  //Use Context
  const {userLoggedIn } = useContext(userContext)
 
  //Login status
  const loginStatus = useOfflineStatus()

  // subcribing the cart Items
  const cardItems = useSelector((store)=>(store.cart.items))
  //console.log(cardItems)

  return (
    <div className="flex justify-between bg-pink-100 shadow-md m-1">
      <div className="w-36">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="navbar-items p-4 m-4 space-x-8 items-end">
        {loginStatus?"🟢":"🔴"}
        <Link to="/grocery"><a>Grocery</a></Link>
        <Link to="/"><a>Home</a></Link>
        <Link to="/about"><a>About</a></Link>
        <Link to="/contact"><a>Contact Us</a></Link>
        <Link to="/cart"><a className="p-2 font-bold text-xl">Cart🛒({cardItems.length})</a></Link>
        <a className="font-bold text-cyan-300">{userLoggedIn}</a>
        <a className="login-btn" onClick={()=>{btn==="login"? setbtn("logout"):setbtn("login")}}>{btn}</a>
        
      </div>
    </div>
  );
};

export default Header;