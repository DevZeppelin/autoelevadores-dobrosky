import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const onTop = window.scrollTo(0, 0);

  return (
    <div className="bg-secundary grid grid-cols-2 text-colorMain p-2 text-center">
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
