import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="pt-10 px-4 md:px-10 bg-slate-800 text-colorMain py-10 w-full">
    <h2 className="font-black">
      Gran experiencia fabricando diferentes tipos de Máquinas Industriales
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="my-auto">
        <p>
          A lo largo de los años avanzamos y concretamos muchos proyectos
          innovadores y revolucionarios. Por un tiempo fuimos la única
          fábrica de autoelevadores a nivel nacional.
        </p>
        <ul className="text-left pt-6 font-bold">
          Siempre fuimos fuertes en:
          <li>MAQUINAS INDUSTRIALES</li>
          <li>MAQUINAS AGRICOLAS </li>
          <li>SERVICIOS EN GRAL</li>
        </ul>
      </div>
      <Link to="/maquinas">
        <div className="m-4">
          <p  className="text-2xl">¡Mira nuestras máquinas!</p>
          <img
            src="/maquinas/base-volcadora-hidraulica.png"
            className="mx-auto border-2 rounded-md border-black"
          />
        </div>
      </Link>
    </div>
  </section>
  );
};

export default Section2;
