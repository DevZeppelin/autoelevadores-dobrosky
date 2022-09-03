import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = ({ toggleNav }) => {
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:py-0 font-bold text-base col-span-2">
        <nav className="hidden md:flex mt-10 text-secundary">
          <Link
            className={`${
              urlActual === "/" ? "color-white" : "text-secundary"
            } text-white text-2xl mt-2 hover:text-third p-2`}
            to="/"
          >
            Autoelevadores
          </Link>
          <Link
            className={`${
              urlActual === "/historia" ? "color-white" : "text-secundary"
            } text-white text-2xl mt-2 hover:text-third p-2`}
            to="/historia"
          >
            Historia
          </Link>
          <Link
            className={`${
              urlActual === "/maquinas" ? "color-white" : "text-secundary"
            } text-white text-2xl mt-2 hover:text-third p-2`}
            to="/maquinas"
          >
            Máquinas
          </Link>
          <Link
            className={`${
              urlActual === "/contacto" ? "color-white" : "text-secundary"
            } text-white text-2xl mt-2 hover:text-third p-2`}
            to="/contacto"
          >
            Contacto
          </Link>
        </nav>
        <div className="p-2 ml-2 md:hidden absolute right-0 top-10 text-4xl text-secundary">
          <button
            onClick={toggleNav}
            aria-label="Hamburguer Button of Main Content"
          >
            <GiHamburgerMenu />
          </button>
        </div>

    </div>
  );
};

/* md:hidden */

export default NavBar;
