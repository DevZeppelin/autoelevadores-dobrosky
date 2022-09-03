const Contacto = () => {
  return (
    <>
      <div className="space-y-5 text-center">
        <h1>Contactanos</h1>
        <p className="font-black">Empresa de José Ignacio Dobrosky</p>
        <p className="text-xl">Celular: <span className="text-4xl">2615757582</span></p>
        
      </div>

      <div className="flex justify-center rounded-2xl p-6">
      <iframe className=" border-2 border-black rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9907258668827!2d-68.66705988507236!3d-33.00401998212442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e6ce1a83d2c63%3A0x7496611412c33083!2sFabrica%20de%20Autoelevadores%20Dobrosky!5e0!3m2!1ses-419!2sar!4v1661974952108!5m2!1ses-419!2sar" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="p-4 mb-10 rounded-xl">
          <p className="italic">RUTA PROVINCIAL 50 Nº 4427-RODEO DEL MEDIO</p>
          <p>MAIPU-MENDOZA</p>
          <p>CP 5529</p>
        </div>
    </>
  );
};

export default Contacto;
