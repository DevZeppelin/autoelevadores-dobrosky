import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Contacto from "./paginas/Contacto";
import Historia from "./paginas/Historia";
import Maquinas from "./paginas/Maquinas";
import Home from "./paginas/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/maquinas" element={<Maquinas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
