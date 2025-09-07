"use client";

import { useState } from "react";

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">Lista de Tarefas</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite uma nova tarefa"
        />
        <button
          onClick={adicionarTarefa}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Adicionar
        </button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className="p-2 border-b">{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}