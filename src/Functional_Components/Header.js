import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
// import style from '../../style.css'

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")

  const onlineStatus = useOnlineStatus()

  return (
    <div className="flex bg-orange-200 justify-between shadow-lg">
      <div className="w-[150]">
        <img src={LOGO_LINK}></img>
      </div>
      <div className="">
        <ul className="flex">
          <li className="p-4 my-6">
            Online: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/about">About US</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">Cart</li>
          <button className="p-4 my-6 hover:bg-red-100 rounded-lg" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}
          </button>
        </ul>
      </div>

    </div>
  )
}

export default Header;