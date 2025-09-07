"use client";

import { useState } from "react";

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Contagem: {contagem}</h2>
      <button
        className="bg-green-500 text-white p-2 m-1 rounded hover:bg-green-600 transition"
        onClick={() => setContagem(contagem + 1)}
      >
        Aumentar
      </button>
      <button
        className="bg-red-500 text-white p-2 m-1 rounded hover:bg-red-600 transition"
        onClick={() => setContagem(contagem - 1)}
      >
        Diminuir
      </button>
    </div>
  );
}