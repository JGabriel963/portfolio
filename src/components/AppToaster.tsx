"use client";

import { Toaster } from "react-hot-toast";

/**
 * Wrapper de Toaster com tema e posição do app.
 * Posicionado no topo-centro; estilo herdado de CSS (.app-toast) pra acompanhar
 * o dark/light mode automaticamente via CSS variables.
 */
export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      gutter={10}
      toastOptions={{
        className: "app-toast",
        duration: 4500,
        // Remove background/color inline pra deixar o CSS reger; ícone é
        // sobrescrito pelo .app-toast no globals.css.
        style: {
          background: "",
          color: "",
          boxShadow: "",
          padding: "",
          borderRadius: "",
        },
        success: { className: "app-toast app-toast-success" },
        error: { className: "app-toast app-toast-error" },
      }}
    />
  );
}
