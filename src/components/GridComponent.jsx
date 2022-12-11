import React from "react";

const GridComponent = ({name, src}) => {
  return (
<div className="relative">
      <div className="indexGridContainer">
        <div className="indexGridImageText rounded-b-2xl">{name}</div>
        <img
          src={src}          
          alt="building icon logo Ad Service petróleo y agua"
          className="gridImage imagen-filtro rounded-2xl h-full w-full pb-4"

          />
      </div>
       {/* CSS Puro */}
       <style jsx='true'>{`
          .imagen-filtro {
            transition: all 0.4s ease;
          }
          .imagen-filtro:hover {
            -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
            filter: grayscale(100%);
          }
        `}</style>
    </div>
  );
};

export default GridComponent;