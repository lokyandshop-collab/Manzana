import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Inventario from "./Inventario";
function Aplicacion() {
  const [seccion, setSeccion] = useState("Inicio");

  const mostrarContenido = () => {
    switch (seccion) {
      case "Inventario":
    return <Inventario />;

      case "Ventas":
        return (
          <div>
            <h2>💰 Ventas</h2>
            <p>Aquí registraremos las ventas realizadas.</p>
          </div>
        );

      case "Recetas":
        return (
          <div>
            <h2>📋 Recetas</h2>
            <p>Aquí podremos guardar y consultar las recetas.</p>
          </div>
        );

      case "Menú":
        return (
          <div>
            <h2>🍽️ Menú</h2>
            <p>Aquí podremos administrar los productos del menú.</p>
          </div>
        );

      case "Informes":
        return (
          <div>
            <h2>📊 Informes</h2>
            <p>Aquí veremos estadísticas y reportes del negocio.</p>
          </div>
        );

      default:
        return (
          <div>
            <h2>Bienvenido a Manzana 🍎</h2>
            <p>Sistema de administración del negocio.</p>

            <div>
              <button onClick={() => setSeccion("Inventario")}>
                Inventario
              </button>

              <button onClick={() => setSeccion("Ventas")}>
                Ventas
              </button>

              <button onClick={() => setSeccion("Recetas")}>
                Recetas
              </button>

              <button onClick={() => setSeccion("Menú")}>
                Menú
              </button>

              <button onClick={() => setSeccion("Informes")}>
                Informes
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <header>
        <h1>🍎 Manzana</h1>
        <p>Sistema de administración</p>
      </header>

      {seccion !== "Inicio" && (
        <button onClick={() => setSeccion("Inicio")}>
          ← Volver al inicio
        </button>
      )}

      <main>{mostrarContenido()}</main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>
);
