import { useFetchProducts } from "./hooks/useFetchProducts";

function App() {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos</p>;

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.images[0]} alt={product.title} width="100" />
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
