import { Link } from "react-router-dom";

const SectionTT = () => {
  return (
    <section className="text-white px-4 md:px-10 py-10 w-full bg-hero bg-cover bg-fixed mb-16">
    <h2 className="font-black text-4xl">
      Autoelevador TodoTerreno
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="my-auto p-4">
        <p>
          Este tipo de autoelevador es una máquina que por sus características es ideal para trabajos en terrenos donde las máquinas convencionales están limitadas para su operatividad</p>        
      </div>
    
        <div>
          <img
            src="\maquinas\S01F04-aett1978.jpg"
            className="mx-auto border-2 m-8 rounded-xl border-black"
          />
          
        </div>
      
      
    </div>
  </section>
  );
};

export default SectionTT;
