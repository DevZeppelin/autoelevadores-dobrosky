import { Link } from "react-router-dom";


const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 right-0 text-secundary bg-colorMain font-black border-gray-600 border-2 w-3/5 rounded-b-3xl font-righteous"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2  mb-5">
        <Link to="/" className="mr-2  mt-2 px-3 ">Autoelevadores</Link>
        <Link to="/historia" className="mr-2 mt-5 px-3 ">Historia</Link>
        <Link to="/maquinas" className="mr-2 mt-5 px-3 ">Máquinas</Link>             
        <Link to="/contacto" className="mr-2 mt-5 px-3 ">Contacto</Link>
      </div>
    </div>
  );
  Link
};

export default MobileNavBar;
