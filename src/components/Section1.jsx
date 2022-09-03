import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="py-4 md:py-8 ">
      <img src="/logo.png" className="mx-auto p-6 h-96 w-96" />
      <h2 className="text-2xl md:text-4xl font-righteous fadeIn textDark uppercase animate-gino p-4">
        Fábrica de Autoeleveadores desde 1940
      </h2>
      <div className="space-y-3 text-xl px-8 md:px-32 md:text-lg textLight mx-auto">
        <p className=" leading-relaxed">
          Empresa argentina (Mendoza) con una trascendental trayectoria en{" "}
          <i>fabricación de autoelevadores</i> y máquinas hechas a medida para
          solucionar diversos problemas de la industria en general.
        </p>
        <p>
          ¡Animate a conocer un poco nuestra{" "}
          <Link className="link" to="/historia">
            historia
          </Link>
          !
        </p>
      </div>
    </section>
  );
};

export default Section1;
