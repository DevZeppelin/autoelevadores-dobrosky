import { Link } from "react-router-dom";

const SectionD20 = () => {
  return (
    <section className="text-white pt-10 px-4 md:px-10 py-10 w-full bg-hero2 bg-cover bg-fixed mt-16">
    <h2 className="text-4xl">
      Autoelevador Dobrosky D20 - D25
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2">
    <Link to="/maquinas">
        <div className="m-0 md:m-12">
          <img
            src="/d20.png"
            className="mx-auto border-2 m-4 rounded-xl border-black w-full "
          />
          
        </div>
      </Link>
      <div className="my-auto p-4 space-y-2">
        <p>
          Nuestro prototipo especial, con motor FORD 221 con una potencia de 120 HP. Nro de Patente: 223.036. Una innovación revolucionaria en cuanto a que en esos tiempo no existían fábricas de autoelevadores en Argentina.
        </p>
        <p>Enfriamiento a presión y frenos automáticos por medio de la trasmisión.</p>
        <p>Sistema hidráulico de bomba a engranaje de un cuerpo.</p>
        <p>Mástil cosntruído en perfiles soldados en sección L de acero laminado el parante interior y de sección U el exterior. Dirección Hidrostática.</p>
        <p>Transmisión Hidrostática</p>
        <p>Transmisión Mecánica, 2 velocidades adelante, 2 velocidades atrás</p>
        
      </div>
      
    </div>
  </section>
  );
};

export default SectionD20;
