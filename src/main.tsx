import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Aplicación() {
  return (
    <div>
      <h1>Manzana</h1>
      <p>Sistema de administración</p>

      <div>
        <button>Inventario</button>
        <button>Ventas</button>
        <button>Recetas</button>
        <button>Menú</button>
        <button>Reportes</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("raíz")!).render(
  <React.StrictMode>
    <Aplicación />
  </React.StrictMode>
);
