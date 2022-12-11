import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = ({ toggleNav }) => {
  const urlActual = location.pathname;

  return (
    /*  <div className="flex my-0 md:py-0 justify-between px-0 bg-secundary text-white text-lg"> */
    <div className="md:flex md:py-0 font-bold text-base">
      {/* <div>
        <Link to="/">
          <img className="flex h-28 w-64 my-auto p-2" src="logo-old.png" />
        </Link>
      </div> */}
      <div className="p-2 md:p-12"></div>
      <nav className="hidden md:flex my-4 space-x-6">
        <Link
          className={`${
            urlActual === "/Servicios" ? "text-third overline" : "text-fourth"
          } text-white text-lg my-auto flex mt-2 hover:text-third p-2`}
          to="/"
        >
          Servicios
        </Link>

        <Link
          className={`${
            urlActual === "/MaquinasVarias" ? "text-third overline" : "text-fourth"
          } text-white text-lg my-auto flex mt-2 hover:text-third p-2`}
          to="/"
        >
          Máquinas Varias
        </Link>
        <Link
          className={`${
            urlActual === "/VolcadoresBins" ? "text-third overline" : "text-fourth"
          } text-white text-lg my-auto flex mt-2 hover:text-third p-2`}
          to="/"
        >
          Volcadores de Bins
        </Link>
        <Link
          className={`${
            urlActual === "/MaquinasAgricolas"
              ? "text-third overline"
              : "text-fourth"
          } text-white text-lg my-auto flex mt-2 hover:text-third p-2`}
          to="/"
        >
          Máquinas Agrícolas
        </Link>
        <Link
          className={`${
            urlActual === "/Elevadores" ? "text-third overline" : "text-fourth"
          } text-white text-lg my-auto flex mt-2 hover:text-third p-2`}
          to="/"
        >
          Elevadores invertidos
        </Link>
        <Link
          className={`${
            urlActual === "/contacto" ? "text-third overline" : "text-fourth"
          } text-white text-lg my-auto flex mt-2 hover:text-third p-2`}
          to="/contacto"
        >
          Contacto
        </Link>
      </nav>

      <div className="p-2 ml-2 md:hidden text-4xl text-third">
        <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div className="flex  ">
        <div className="bg-secundary w-16 md:w-56 transform skew-x-12 m-0 translate-x-12 md:translate-x-48 overflow-hidden"></div>
        <div className=" bg-secundary w-16 md:w-56 transform  m-0 overflow-hidden"></div>
      </div>
    </div>
  );
};

/* md:hidden */

export default NavBar;
