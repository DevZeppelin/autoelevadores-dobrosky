import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section>
      <div>
        <div className="flex relative overflow-hidden md:grid md:grid-cols-2 text-lg px-6 md:px-24 bg-lightGray background-overlay">
          <div className="first-block space-y-2 md:space-y-4 p-2 md:p-8 my-auto bg-white z-40 md:opacity-100 h-full">
            <h1 className="font-black text-2xl md:text-2xl">
              FABRICA DE AUTOELEVADORES DESDE 1970
            </h1>
            <div className="h-1 w-56 bg-dgreen mx-auto"></div>
            <div className="">
              <p className="pb-8 text-xl">
                Es una firma Argentina con una trayectoria en la fabricación de
                Autoelevadores y diversos tipos de maquinarias para satisfacer
                las necesidades de la agroindustria.
              </p>
            </div>
            <Link to="/contacto">
              <button className="btn animate-bounce">Contáctanos hoy</button>
            </Link>
          </div>
          <div className="hidden md:block flex-wrap">
            <img src="\maquinas\S01F01-autoelevador-pinza-fardos.jpg" alt="" className="h-full my-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
