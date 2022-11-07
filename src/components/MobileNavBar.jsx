import { Link } from "react-router-dom";


const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 left-0 text-third bg-colorMain font-black border-gray-600 border-2 w-3/5 rounded-b-3xl font-righteous"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2  mb-5">
        <Link to="/Servicios" className="mr-2  mt-2 px-3 ">Servicios</Link>        
        <Link to="/MaquinasVarias" className="mr-2 mt-5 px-3 ">Máquinas Varias</Link>             
        <Link to="/VolcadoresBins" className="mr-2 mt-5 px-3 ">Volcadores de Bins</Link>             
        <Link to="/MaquinasAgricolas" className="mr-2 mt-5 px-3 ">Máquinas Agrícolas</Link>             
        <Link to="/Elevadores" className="mr-2 mt-5 px-3 ">Elevadores</Link>             
        <Link to="/contacto" className="mr-2 mt-5 px-3 ">Contacto</Link>
      </div>
    </div>
  );
  Link
};

export default MobileNavBar;
