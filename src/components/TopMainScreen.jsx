import MainBarButton from "./MainBarButton";

import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-12 text-black justify-center md:justify-between py-2">
      <div className="flex-col">
        <Link to="/">
         
            <img
              src="/logo.png"
              alt="building icon logo Ad Service petróleo y agua"
              height="300"
              width="300"
              className="p-2"
            />
          
        </Link>
      </div>

      <div className="hidden md:flex justify-between space-x-2 text-center my-auto p-2">
        <a
          href="https://www.instagram.com/autoelevadores.dobrosky/"
          target="_blank"
          rel="noreferrer"
        >
          <MainBarButton
            logo={<FiInstagram className="text-4xl flex my-auto m-2" />}
            text="Instagram"
            description="@autoelevadores.dobrosky"
            classType="text-colorMain text-lg font-bold"
          />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5492615757582"
          target="_blank"
          rel="noreferrer"
        >
          <MainBarButton
            logo={<FaWhatsapp className="text-4xl flex my-auto m-2" />}
            text="Llamadas y Whatsapp"
            description="2615 75-7582"
            classType="text-dgreen text-base font-bold"
          />
        </a>
        <Link to="/contacto">
          <div className="rounded-lg p-4 text-xl ml-16  my-auto btn animate-bounce">
            Contacto
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
