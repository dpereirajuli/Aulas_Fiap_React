import Cartao from "@/components/Cartao";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Cartao nome="Maria" serie="3º ano" />
      <Cartao nome="João" serie="3º ano" />
    </div>
  );
}