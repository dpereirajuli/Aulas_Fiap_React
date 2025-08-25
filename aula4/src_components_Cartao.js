export default function Cartao({ nome, serie }) {
  return (
    <div className="bg-blue-100 p-4 m-2 rounded-lg shadow-md hover:bg-blue-200 transition">
      <h2 className="text-xl font-bold text-blue-800">Nome: {nome}</h2>
      <p className="text-gray-700">Série: {serie}</p>
    </div>
  );
}