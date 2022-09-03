import CustomImage from "../components/CustomImage";

CustomImage

const Historia = () => {
  return (
    <section className="text-center space-y-9 mx-6 md:mx-24">
      <h1>
        Breve reseña de la Empresa DOBROSKY desde los años 40
      </h1>

      <div>
        <p>
          A PARTIR DE LA DECADA DEL 40 SE REALIZARON OBRAS HIDRAULICAS
          CONSTRUYENDO PARA LAS DIVERSAS CANALIZACIONES DE RIEGO COMPUERTAS Y
          PARTIDORAS DE AGUA, COMO ASÍ TAMBIÉN SE INCURSIONO EN LA FABRICACIÓN
          DE MAQUINARIA PARA LA ELABORACIÓN DE LADRILLOS HUECOS Y OTROS.
        </p>
        <p>
          EN LA DECADA DE 1970 SE COMENZARON A FABRICAR AUTOELEVADORES CON
          TRANSMISION HIDROSTÁTICA CON UN SOLO MOTOR HIDRÁULICO Y PUENTE
          DIFERENCIAL.
        </p>
        <p>
          CONTAMOS ADEMAS CON UN DEPARTAMENTO DE PROYECTOS Y DISEÑOS
          INDUSTRIALES QUE PONEMOS A SU DISPOSICION PARA LA ELABORACION DEL
          DISEÑO Y FABRICACION DE LAS MAQUINAS QUE PUEDEN SER DE SU NECESIDAD
        </p>
      </div>

      <div>
        <p>
          NUESTRA FIRMA ESTA DENTRO DEL RUBRO METALMECANICO DESDE EL AÑO 1910,
          EPOCA EN LA QUE SE CONSTRUIAN CARRUAJES CON TRACCIÓN A SANGRE
          UTILIZADOS PARA CARGA COMO ASÍ PARA EL TRANSPORTE.
        </p>
        <p>
          A MEDIDA QUE EL PASO DE LOS AÑOS FUERON APORTANDO NUEVOS MEDIOS PARA
          LAS DIVERSAS ACTIVIDADES, ESTE RUBRO FUE CAMBIANDO DE ACTIVIDAD
          SIEMPRE DENTRO DEL SECTOR DE MANUFACTURA.
        </p>
      </div>

      <div>
        <p>
          "La Satisfacción de haber logrado una maquina que cumplio las
          espectativas de nuestros clientes, seguimos apostando a la
          responsabilidad, experiencia, calidad y respeto que merecen nuestros
          adquirentes."
        </p>
      </div>

      <div>
        <h2>Trayectoria</h2>
        <p>
          Nuestra Empresa Comenzo FABRICANDO el primer Autoelevador en la
          Argentina, con transmisión Hidrostática.
        </p>
        <p>
          Luego se presentaron nuevos proyectos tales como Tractores invertidos,
          Volcadores, Maquinaria Agricola y Palas Cargadoras, todo de
          fabricación NACIONAL, nunca dejando de lado la fabricación de
          Autoelevadores
        </p>
        <p>
          Siempre hemos fabricado de Maquinas segun NECESIDAD DEL CLIENTE,
          acompañado de asesoramiento y Servicios para las mismas.
        </p>
      </div>

      <div>
        <h2>
          EMPRESAS QUE ADQUIRIERON NUESTRO PRIMER AUTOELEVADOR DECADA 1970
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 uppercase pt-6">
          <CustomImage src="/clientes/angulo.png" />
          <CustomImage src="/clientes/chyc.jpg" />
          <CustomImage src="/clientes/copizi.png" />
          <CustomImage src="/clientes/giol.png" />
          <CustomImage src="/clientes/pepsi.png" />
          <CustomImage src="/clientes/rayencura.jpg" />
          <CustomImage src="/clientes/santaana.jpg" />
        </div>
      </div>

      <div>
        <h2>Servicios Históricos de nuestra empresa</h2>

        <p>
          Nuestros Servicios son un pilar importante en la Empresa, gracias a
          que asumimos un Compromiso Directo con nuestro Cliente.
        </p>

        <p>
          Industrial: Autoelevadores, Tractores, Elevadores, Volcadores,
          Carretillas, etc.
        </p>

        <li>
          Autoelevadores: Reparación de torres simple accion, doble acción,
          colocación de desplazamiento lateral, y servicios en gral.
        </li>

        <li>
          Tractores: Inversión (Si usted cuenta con un tractor agricola, se
          invierte para poder utilizarlo como una maquina de avanzada, para
          elevar cargas, trasportarlas, apilarlas, etc), Reparación de levante
          hidráulico, dirección hidráulica.
        </li>

        <li>
          Elevadores: Se aplican a tractores si requieren de modificaciones,
          Reparación de cilindros hidráulicos, Sistema Hidráulico, Mangueras,
          Contrapeso, Chasis.
        </li>

        <li>
          Volcadores: Modificación de angulo de volcado, Adaptación de
          refuerzos, Adaptación de tapa ajusta bins hidráulica, Reparación de
          Bomba y Deposito de Aceite.
        </li>

        <li>
          Carretillas: Cambio de ruedas, Diseño de refuerzos para mayor rigidez,
          Reparación de bomba para levante.
        </li>

        <p>
          Si posee una máquina anteriormente especificada o no, Consultenos que
          SIN CARGO la vemos y le pasamos presupuesto.{" "}
        </p>

        <li>Agricola: Etiquetadoras, Arados, Sinceles, Niveletas, etc.</li>

        <li>Etiquetadoras: Reparaciones en gral, Implementación de mejoras.</li>
        <li>Arados: Cambio de discos, Colocación de refuerzos.</li>
        <li>Sinceles: Reparaciones en gral.</li>
        <li>
          Niveletas: Hidráulicas: Reparación de cilindros, Camcio de hoja
          partidora, pernos, mangueras, comando hidráulico.
        </li>

        <p>
          Si posee una máquina anteriormente especificada o no, Consultenos que
          SIN CARGO la vemos y le pasamos presupuesto.
        </p>

        <li>
          Mantenimiento: Autoelevadores, Tractores invertidos, Palas cargadoras,
          Volcadores.
        </li>
        <p>
          Si usted necesita realizar una mejora o modificación, nosotros lo
          asesoramos con las soluciones posibles.
        </p>
      </div>
    </section>
  );
};
export default Historia;
