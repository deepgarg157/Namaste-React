import { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UseContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")

  const onlineStatus = useOnlineStatus()

  const { loggedInUser } = useContext(UseContext)

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items)

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
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>

          <button className="p-4 my-6 hover:bg-red-100 rounded-lg" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}
          </button>

          <li className="p-4 my-6 rounded-lg">{loggedInUser}</li>

        </ul>
      </div>

    </div>
  )
}

export default Header;