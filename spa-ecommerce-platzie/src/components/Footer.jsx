import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d253f] text-white text-center p-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mi Tienda - Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
