import React from "react";
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
      <div className="bg-colorMain flex md:grid grid-cols-4">
        <Link to="/">
          <img src="/logo-old.png" className="h-36 p-2 mx-auto" />
        </Link>
        <NavBar toggleNav={toggleNav} />
        <div className="hidden md:flex flex-col text-right px-4">
          <h2>Autoelevadores DoBrosky</h2>
          <p className="text-lg italic">Desde 1940</p>
        </div>
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
