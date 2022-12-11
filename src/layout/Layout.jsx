import React from "react";

import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TopLeyend from "../components/TopLeyend";
import TopMainScreen from "../components/TopMainScreen";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
   e.preventDefault();
    setOpen(!open);
  };
 

  return (
    <div>
      <TopLeyend/>
      <TopMainScreen/>
      <div className="bg-colorMain flex">        
        <NavBar toggleNav={toggleNav} />        
      </div>
      <MobileNavBar open={open} />
      <div className="h-full text-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
