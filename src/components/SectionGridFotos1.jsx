import { Link } from "react-router-dom";
import GridComponent from "./GridComponent";

const SectionGridFotos1 = ({myRefG1, IsVisibleG1}) => {
  return (
    <section ref={myRefG1} className= {`${IsVisibleG1 ? "animate-appear" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
        <div className="my-auto font-bold flex">
          <div className="w-3 h-32 bg-dgreen my-auto"></div>
          <p className="text-2xl m-6">Fábrica de Autoelevadores y máquinas de acuerdo a su necesidad</p>
        </div>
        <GridComponent
          name="Autoelevador Con Pinza para Fardos"
          src="\maquinas\S01F01-autoelevador-pinza-fardos.jpg"
        />
        <GridComponent
          name="Pinza para Fardos"
          src="\maquinas\S01F02-pina-fardos.jpg"
        />
        <GridComponent
          name="AE c/pinza para fardos: Bobina de papel"
          src="\maquinas\S01F03-ae-pina-fardos-bobina-papel.jpg"
        />
        <GridComponent
          name="Autoelevador TodoTerreno 1978"
          src="\maquinas\S01F04-aett1978.jpg"
        />
        <GridComponent
          name="Tractor Invertido"
          src="\maquinas\S04-tractor-invertido.jpg"
        />
        <GridComponent
          name="Pala Cargadora"
          src="\maquinas\S05-pala-cargadora.jpg"
        />
        <GridComponent
          name="elevador Eléctrico"
          src="\maquinas\S06-elevadorelectrico.jpg"
        />
        <GridComponent
          name="VolcaBins Fijo"
          src="\maquinas\S07F01-volcabins-fijo.jpg"
        />
        <GridComponent
          name="VolcaBins Fijo"
          src="\maquinas\S07F02-volcabins-fijo.jpg"
        />
        <GridComponent
          name="VolcaBins Lateral"
          src="\maquinas\S07F03-volcabins-lateral.jpg"
        />
        <GridComponent
          name="Transmisiones Mecánicas"
          src="\maquinas\S08F01-transmisiones-mecanicas.jpg"
        />
        <GridComponent
          name="Reductores de velocidad con Embrague"
          src="\maquinas\S08F02-reductores-velocidad-con-embrague.jpg"
        />
        <GridComponent
          name="Transpalet"
          src="\maquinas\S09F01-transpalet.jpg"
        />
        <GridComponent
          name="Cincel"
          src="\maquinas\S09F02-cincel.jpg"
        />
        <GridComponent
          name="Arado Múltiple"
          src="\maquinas\S09F03-arado-multiple.jpg"
        />
        <GridComponent
          name="Niveladora"
          src="\maquinas\S10-niveladora.jpg"
        />

        <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
          <h2 className="font-bold text-xl">Más sobre nuestros servicios</h2>
          
          <Link to="/servicios">
            <button className="btn">Servicios</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionGridFotos1;
