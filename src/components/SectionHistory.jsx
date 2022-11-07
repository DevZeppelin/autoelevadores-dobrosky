const Section1 = () => {
  return (
    <section className="text-center space-y-9 mx-6 md:mx-18">
      <h1>Breve reseña de la firma DOBROSKY</h1>

      <div className="flex flex-col md:grid grid-cols-2">
        <div className="space-y-4">
          <p>
            A partir de la década de 1910 DOBROSKY inicia su actividad en el
            rubro MetalMecánico construyendo carruajes y carros para el
            transporte de carga de la época.
          </p>
          <p>
            A medida que transcurre el tiempo se va incursionando en lo que la
            demanda requiere, siempre en el rubro metalmecánico.
          </p>
          <p>
            En la década de 1940 se fabrican compuertas para obras hidráulicas,
            como así diversas máquinas a requerimiento de los clientes.
          </p>
          <p>
            Desde la década de 1970 se comienza a fabricar Autoelevadores
            Convencional y Todo Terreno con transmisión mecánica e hidrostática,
            siendo el primero en el país en utilizar un solo motor hidráulico y
            puente diferencial.
          </p>
        </div>
        <div>
          <img
            src="\maquinas\S01F01-autoelevador-pinza-fardos.jpg"
            className="mt-10 md:mt-0 rounded-xl m-2 md:m-8 border-2 border-black my-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
