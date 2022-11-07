import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Contacto from "./paginas/Contacto";
import Servicios from "./paginas/Servicios";
import MaquinasVarias from "./paginas/MaquinasVarias";
import VolcadoresBins from "./paginas/VolcadoresBins";
import MaquinasAgricolas from "./paginas/MaquinasAgricolas";
import Elevadores from "./paginas/Elevadores";
import Home from "./paginas/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/MaquinasVarias" element={<MaquinasVarias />} />
          <Route path="/MaquinasAgricolas" element={<MaquinasAgricolas />} />
          <Route path="/VolcadoresBins" element={< VolcadoresBins/>} />
          <Route path="/Elevadores" element={< Elevadores/>} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Servicios" element={<Servicios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
