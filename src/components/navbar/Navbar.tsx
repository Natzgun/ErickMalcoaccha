//import PropTypes from 'prop-types'
import { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarMobile from "./NavbarMobile";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-dark.png";
import { GlobalContext } from "../../context/Global/GlobalContext";
import {
  ButtonContextType,
  ToggleContextType,
} from "../../interfaces/interfaces";
import NavSocialIcons from "./NavSocialIcons";

const Navbar = () => {
  const { toggleClick } = useContext(GlobalContext) as ToggleContextType;
  const { open } = useContext(GlobalContext) as ButtonContextType;
  console.log(toggleClick);

  return (
    <nav className="bg-[#0a192f] fixed w-full flex justify-between items-center px-4 h-[70px] text-gray-300">
      <div>
        <img src={Logo} alt="" className="object-cover md:cursor-pointer h-9" />
      </div>
      <ul className="md:flex hidden gap-4">
        <li className="hover:text-green-400">
          <NavLink to="/" className="px-3">
            Inicio
          </NavLink>
        </li>
        <li className="hover:text-green-400">
          <NavLink to="/about" className="px-3">
            About
          </NavLink>
        </li>
        <li className="hover:text-green-400">
          <NavLink to="/Experience" className="px-3">
            Experience
          </NavLink>
        </li>
        <li className="hover:text-green-400">
          <NavLink to="/Contact" className="px-3">
            Contact
          </NavLink>
        </li>
      </ul>
      {/* Hamburguer menu */}
      <div onClick={() => toggleClick()} className="md:hidden z-10 text-3xl">
        {!open ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <NavbarMobile />
      <NavSocialIcons />
    </nav>
  );
};

//Navbar.propTypes = {};

export default Navbar;
