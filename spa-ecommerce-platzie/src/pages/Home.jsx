import React, { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";

function Home({ searchTerm }) {
  const { products, loading, error } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 5 columnas x 2 filas

  if (loading)
    return <p className="text-center text-lg">Cargando productos...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error al cargar productos</p>
    );

  // Filtrar productos según la búsqueda
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular índices de paginación
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Lista de Productos
      </h1>

      {/* GRID DE PRODUCTOS */}
      <div className="grid grid-cols-5 gap-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="border p-2 rounded-lg shadow-lg">
            <h3 className="text-sm font-semibold text-center">
              {product.title}
            </h3>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-[50px] h-[50px] object-cover mt-2 mx-auto"
            />
            <p className="text-sm mt-2 font-bold text-center">
              Precio: ${product.price}
            </p>
          </div>
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="text-lg font-bold">
          {currentPage} / {totalPages}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Home;
