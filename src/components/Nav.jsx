import { useState } from "react";
import logo from "../assets/logoCompany.png";
import barResponservMobile from "../assets/barMobile.svg";
import mobileCloseIcon from "../assets/mobileCloseIcon.svg";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavMobile = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <div className="navList">
      <div className="navLogo">
        <img src={logo} alt="Logo Nav" />
        <div className="barResponservMobile" onClick={handleNavMobile}>
          <img
            src={navOpen ? mobileCloseIcon : barResponservMobile}
            alt="bar Responserv Mobile"
          />
        </div>
      </div>

      <div className={`navLink ${navOpen ? "navLinkShow" : ""}`}>
        <hr />
        <ul>
          <li>
          <NavLink  to={'/'}>Home</NavLink>
          </li>
          <li>
          <NavLink  to={'/services'} >Services</NavLink>
          </li>
          <li>
          <NavLink  to={'/contactUs'}>contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navLinkDesktop">
        <ul>
          <li>
            <NavLink  to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink  to={'/services'}>Services</NavLink>
          </li>
          <li>
            <NavLink  to={'/contactUs'}>contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
