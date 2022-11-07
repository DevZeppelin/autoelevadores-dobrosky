import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const onTop = window.scrollTo(0, 0);

  return (
    <div className="bg-secundary flex flex-col md:grid md:grid-cols-2 text-third p-2 text-center">
      <p>¡Muchas gracias por su visita!</p>
      <Link to="/" className="uppercase text-lg my-auto" onClick={onTop}>
        IR ARRIBA ☝
      </Link>
      <div className="p-4 text-sm">
        Make with &#128153; in Mendoza, Argentina, by{" "}
        <a href="https://devzeppelin.ar" target="_blank" rel="noopener">
          <b>DevZeppelin</b>
        </a>
        . All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
