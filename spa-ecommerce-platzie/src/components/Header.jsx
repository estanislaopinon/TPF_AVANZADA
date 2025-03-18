import Reac, { useState } from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import logo from "../assets/logo.png";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); //Envia valor de busqueda a App
  };
  return (
    <header className="bg-[#0d253f] p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="cursor-pointer">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 sm:h-10 md:h-8" />
        </Link>
        <div className="mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 rounded-md border border-gray-300 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
