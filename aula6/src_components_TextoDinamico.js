"use client";

import { useState } from "react";

export default function TextoDinamico() {
  const [texto, setTexto] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="p-2 border rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite algo..."
      />
      <p className="text-gray-700">Você digitou: {texto}</p>
    </div>
  );
}