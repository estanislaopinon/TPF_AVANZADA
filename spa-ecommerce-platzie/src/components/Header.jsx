import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="bg-[#0d253f] p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="cursor-pointer">
        <Link to="/">
          {" "}
          {/* Envolvemos el logo en un Link para redirigir al inicio */}
          <img src={logo} alt="Logo" className="h-12 sm:h-10 md:h-8" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
