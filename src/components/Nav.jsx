import { useState } from "react";
import logo from "../assets/logoCompany.png";
import barResponservMobile from "../assets/barMobile.svg";
import mobileCloseIcon from "../assets/mobileCloseIcon.svg";
import { Link } from "react-router-dom";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Sections</a>
          </li>
        </ul>
      </div>

      <div className="navLinkDesktop">
        <ul>
          <li>
            <Link to={'/'} className="activeLink">Home</Link>
          </li>
          <li>
            <Link to={'/services'}>Services</Link>
          </li>
          <li>
            <Link to={'/contactUs'}>contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
