"use client";
import { useRouter } from "next/navigation"; // Cambio aquí: next/navigation en lugar de next/router
import React from "react";
export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>Acerca de nosotros</h1>
      <p>Esta es la página de acerca de nosotros</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          alert("Hola, soy Richard Rocuant");
          router.push("/");
        }}
      >
        Click
      </button>
    </div>
  );
}