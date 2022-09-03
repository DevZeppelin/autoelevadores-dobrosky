import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section className="pt-10 px-4 md:px-10 py-10 w-full">
    <h2 className="font-black">
      Autoelevador Dobrosky D20 - D25
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2">
    <Link to="/maquinas">
        <div>
          <img
            src="/d20.png"
            className="mx-auto border-2 m-4 rounded-md border-black"
          />
          <p  className="text-base">(click para ver manual)</p>
        </div>
      </Link>
      <div className="my-auto p-4">
        <p>
          Nuestro prototipo especial, con motor FORD 221 con una potencia de 120 HP. Nro de Patente: 223.036. Una innovación revolucionaria en cuanto a que en esos tiempo no existían fábricas de autoelevadores en Argentina.
        </p>
        <p>Enfriamiento a presión y frenos automáticos por medio de la trasmisión.</p>
        <p>Sistema hidráulico de bomba a engranaje de un cuerpo.</p>
        <p>Mástil cosntruído en perfiles soldados en sección L de acero laminado el parante interior y de sección U el exterior. Dirección Hidrostática.</p>
        
      </div>
      
    </div>
  </section>
  );
};

export default Section3;
