import React, { useState } from "react";

function Inventario() {
  const [productos, setProductos] = useState<string[]>([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() === "") return;

    setProductos([...productos, nuevoProducto]);
    setNuevoProducto("");
  };

  return (
    <div>
      <h2>📦 Inventario</h2>

      <p>Control de productos y existencias.</p>

      <div>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
        />

        <button onClick={agregarProducto}>
          Agregar producto
        </button>
      </div>

      <h3>Productos</h3>

      {productos.length === 0 ? (
        <p>No hay productos registrados todavía.</p>
      ) : (
        <ul>
          {productos.map((producto, indice) => (
            <li key={indice}>{producto}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Inventario;
