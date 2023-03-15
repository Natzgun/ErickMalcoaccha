import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../context/Global/GlobalContext";
import {
  ButtonContextType,
  ToggleContextType,
} from "../../interfaces/interfaces";

const NavbarMobile = () => {
  const { toggleClick } = useContext(GlobalContext) as ToggleContextType;
  const { open } = useContext(GlobalContext) as ButtonContextType;
  // la parte de ocultar el navbar puede mejorar agregando transiciones
  return (
    <ul
      className={
        !open
          ? "hidden"
          : "bg-[#0a192f] absolute top-0 left-0 w-full h-screen items-center flex flex-col justify-center"
      }
      onClick={() => toggleClick()}
    >
      <li className="py-5 text-3xl hover:text-green-400">
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li className="py-5 text-3xl hover:text-green-400">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="py-5 text-3xl hover:text-green-400">
        <NavLink to="/Experience">Experience</NavLink>
      </li>
      <li className="py-5 text-3xl hover:text-green-400">
        <NavLink to="/Contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavbarMobile;
