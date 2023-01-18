import { Link } from "react-router-dom";

const SectionD20 = ({ myRefD20, isVisibleD20 }) => {
  //SCROLLING

  /* 
 const [isVisibleD20, setIsVisible] = useState( )  
 const myRefD20 = useRef()

  useEffect(()=>{
   const observer = new IntersectionObserver((entries) => {
     const entry = entries[0]
     setIsVisible(entry.isIntersecting)
     console.log('enrty: ', entry)
   })
   observer.observe(myRefD20.current)
 }, []) 
 la siguiente linea reemplaza a todo esto...*/

  return (
    <section className="text-white pt-10 px-4 md:px-10 py-10 w-full bg-hero2 bg-cover bg-fixed mt-16">
      <div ref={myRefD20} className={`${isVisibleD20 ? "animate-left" : ""}`}>
        <h2 className="text-3xl">Autoelevador Dobrosky D20 - D25</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link to="/maquinas">
            <div className="m-0 md:m-12">
              <img
                src="/d20.png"
                className="mx-auto border-2 m-4 rounded-xl border-black w-full"
              />
            </div>
          </Link>
          <div className="my-auto bg-gray-400 text-black rounded-xl text-xl p-4 space-y-5">
            <h2 className="text-2xl">CARACTERÍSTICAS</h2>
            
              <p>
                Está construído con chasis de una sola pieza, siendo los laterales del mismo los depósitos de combustible, posee tapas desmontables para limpieza.
              </p>
              <p>
                Motor nafta y diesel
              </p>
              <p><b>TRANSMISIÓN:</b> Hidrostática con un solo motor hidráulico y puente diferencial</p>
              <p><b>TRANSMISIÓN:</b> Mecánica dos velocidades adelante, dos velocidades atrás.</p>
              <p><b>MÁSTIL:</b> Cilindros laterales de elevación</p>
              <p><b>TIPO DE AUTOELEVADOR:</b> Convencional y todo terreno</p>
              <p>Facilidad y rapidez para verificar o realizar mantenimiento.</p>
              <p>Mástil con cilindro laterales de levante.</p>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionD20;
