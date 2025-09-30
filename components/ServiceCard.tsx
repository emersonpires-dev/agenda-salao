// components/ServiceCard.tsx

type ServiceProps = {
  name: string;
  price: number;
  duration: number; // duração em minutos
};

export default function ServiceCard({ name, price, duration }: ServiceProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center shadow-md border border-gray-700">
      <div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-gray-400">Duração: {duration} min</p>
        <p className="text-green-400 font-semibold mt-1">
          R$ {price.toFixed(2).replace('.', ',')}
        </p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
        Agendar
      </button>
    </div>
  );
}