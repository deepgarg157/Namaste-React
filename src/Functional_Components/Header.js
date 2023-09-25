import { LOGO_LINK } from "../utils/constants";

const Header = () => {
    return (<div className="header">
      <div className="logo">
        <img src={LOGO_LINK}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
  
    </div>
    )
  }

  export default Header;