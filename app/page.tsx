// app/page.tsx

import ServiceCard from "@/components/ServiceCard";

// Mais tarde, isso virá de um banco de dados!
const servicesData = [
  { id: 1, name: 'Manicure', price: 50, duration: 45 },
  { id: 2, name: 'pés', price: 40, duration: 30 },
  { id: 3, name: 'cabelo', price: 35, duration: 40 },
  { id: 4, name: 'Depilação', price: 30, duration: 20 },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Studio D´ Marias</h1>
        <p className="text-xl text-gray-300 mt-2">Escolha um serviço para agendar</p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            name={service.name}
            price={service.price}
            duration={service.duration}
          />
        ))}
      </div>
    </main>
  );
}