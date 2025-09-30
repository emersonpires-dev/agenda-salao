// app/agendar/[id]/page.tsx

'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation'; // 1. Importa o useParams
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ptBR } from 'date-fns/locale';

// Dados dos serviços (temporariamente aqui)
const servicesData = [
  { id: 1, name: 'Corte de Cabelo', price: 50, duration: 45 },
  { id: 2, name: 'Barba', price: 40, duration: 30 },
  { id: 3, name: 'Manicure', price: 35, duration: 40 },
  { id: 4, name: 'Depilação (Axila)', price: 30, duration: 20 },
  { id: 5, name: 'Corte + Barba (Combo)', price: 80, duration: 75 },
];

export default function SchedulePage() {
  const params = useParams(); // 2. Usa o hook para pegar os parâmetros da URL
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  const serviceId = Array.isArray(params.id) ? params.id[0] : params.id;
  const service = servicesData.find(s => s.id === parseInt(serviceId));

  if (!service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Serviço não encontrado</h1>
      </main>
    );
  }

  // Estilos CSS para o calendário
  const css = `
    .rdp { --rdp-cell-size: 45px; --rdp-accent-color: #1e90ff; --rdp-background-color: #2d3748; --rdp-accent-color-dark: #1e90ff; --rdp-background-color-dark: #2d3748; --rdp-outline: 2px solid var(--rdp-accent-color); --rdp-outline-selected: 3px solid var(--rdp-accent-color); --rdp-border-radius: 10px; color: #FFF; }
    .rdp-caption_label, .rdp-head_cell { color: #A0AEC0; font-weight: bold; }
    .rdp-nav_button { color: #A0AEC0; }
  `;

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-900 text-white">
      <style>{css}</style>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Agendamento</h1>
        <p className="text-2xl text-blue-400 mt-2">{service.name}</p>
      </div>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-semibold text-center mb-6">1. Selecione o dia</h2>
        <div className="flex justify-center">
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            locale={ptBR}
            disabled={{ before: new Date() }}
          />
        </div>

        {selectedDay && (
          <div className="mt-6 text-center border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-semibold text-center mb-4">2. Escolha o horário</h2>
            {/* 3. CORRIGIDO o nome da função aqui */}
            <p className="text-lg">Data selecionada: {selectedDay.toLocaleDateString('pt-BR')}</p>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700">09:00</button>
              <button className="bg-gray-600 p-2 rounded-lg cursor-not-allowed" disabled>10:00</button>
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700">11:00</button>
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700">14:00</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}