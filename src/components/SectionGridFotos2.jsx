
import GridComponent from "./GridComponent";
import MainBarButton from "./MainBarButton";
import { FaInstagram } from "react-icons/fa";

const SectionGridFotos2 = ({myRefG2, IsVisibleG2}) => {
  return (
    <section ref={myRefG2} className= {`${IsVisibleG2 ? "animate-appear" : ""} pt-10 px-4 md:px-10 bg-colorMain text-third py-10 w-full`}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
        
        <img src="logo-old.png" className="my-auto bg-fourth border-2 border-black rounded-xl" />
        <GridComponent
          name="Montacarga Fijo"
          src="\maquinas\S11F01-montacarga-fijo.jpg"
        />
        <GridComponent
          name="Levante Hidráulico Tractor"
          src="\maquinas\S12F01-levante-hidraulico-tractor.jpg"
        />
        <GridComponent
          name="Etiquetadora Bolsas Rejillas"
          src="\maquinas\S13F01-etiquetadora-bolsas-rejillas.jpg"
        />
        <GridComponent
          name="Prensa Hidráulica Vigas Laminadas"
          src="\maquinas\S13F02-prensa-hidraulica-vigas-laminadas.jpg"
        />
        <GridComponent
          name="Plataforma Volcadora"
          src="\maquinas\S14F01-plataforma-volcadora.jpg"
        />
        <GridComponent
          name="Plataforma Hidráulica"
          src="\maquinas\S14F02-plataforma-hidraulica.jpg"
        />
        <GridComponent
          name="Cilindro Hidráulico"
          src="\maquinas\S15F01-cilindro-hidraulico.jpg"
        />
        <GridComponent
          name="Cilindro Hidráulico"
          src="\maquinas\S15F02-cilindro-hidraulico.jpg"
        />
        <GridComponent
          name="Plataforma para autoelevador"
          src="\maquinas\S16F01-plataforma-ae.jpg"
        />
        <GridComponent
          name="Plataforma Móvil"
          src="\maquinas\S16F02-plataforma-movil.jpg"
        />
        
        <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
          <h2 className="font-bold text-xl">¡Seguinos en Instagram!</h2>
          
        
          <a
                  href="https://www.instagram.com/autoelevadores.dobrosky/"
                  target="_blank"
                  rel="noreferrer"
                >
              <FaInstagram className="text-8xl text-center mx-auto flex my-auto m-2" />
           
         </a>
          
        </div>
      </div>
  </section>
  );
};

export default SectionGridFotos2;
