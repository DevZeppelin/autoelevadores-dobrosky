import CustomImage from "../components/CustomImage";

const Maquinas = () => {
  return (
    <>
      <section>
        <h1 className="text-center">
          Nuestras increíbles máquinas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomImage
            title="Volcador de Bins"
            text="Sistema EXCLUSIVO de tapa ajusta bins hidráulica, evita caída del Bins. Central Hidráulicade moderno diseño con depósito de aceite que alimenta a la bomba hidráulica por gravedad. Estructura robusta ofrece una vida útil prolongada. Agilidad en el volcado por su sistema de concepción hidráulica."
            src="/maquinas/volcador-de-bins.png"
          />
            <CustomImage
              title="Tractor Invertido Elevador"
              text="Aplicado al tercer punto del tractor. Torre elevación de Visibilidad Total 'Cilindros de levante laterales'. Chasis de una sola pieza para que la carga actúe sobre el mismo y no en la parte motriz del tractor. Buena posición de manejo. Dirección hidrostática, techo de protección.  "
              src="/maquinas/tractor-invertido-elevador.png"
            />
          <CustomImage
            title="Base Volcadora Hidráulica"
            text="Volvador compuesto por central hidráulica y dos cilindros telescópicos, con ángulo de inclinación de acuerdo a la necesidad del producto a descargar. SEGURIDAD: estructura sobredimensionada de perfiles de grandes dimensiones"
            src="/maquinas/base-volcadora-hidraulica.png"
          />
          <CustomImage
            title="Autoelevador Todo Terreno"
            src="/maquinas/autoelevador-todo-terreno.png"
          />
          <CustomImage
            title="Elevador Eléctrico"
            src="/maquinas/elevador-electrico.png"
          />
            <CustomImage
              title="Volcador Frontal de Bins"
              src="/maquinas/volcador-frontal-de-bins.png"
            />
            <CustomImage
              title="Carretilla Hidráulica"
              src="/maquinas/carretilla-hidraulica.png"
            />
          <CustomImage
            title="Niveladora Hidráulica"
            src="/maquinas/niveladora-hidraulica.png"
          />
          <CustomImage
            title="Tranmisión Hidroestática Mecánica"
            src="/maquinas/transmision-hidroestatica-mecanica.png"
          />
          <CustomImage
            title="Bicicleta Brinkos"
            src="/maquinas/bicicleta-brinkos.png"
          />
            <CustomImage
              title="Pala Cargadora"
              text="Altura elevación: '3.20-3.30mts. Capacidad Balde: 0.50mts. Cosntrucción para servicio pesado. OPCIONAL: Nivelador automático de balde, Uñas para carga de bins o pallets'"
              src="/maquinas/pala-cargadora.png"
              />
        </div>
      </section>
    </>
  );
};

export default Maquinas;
