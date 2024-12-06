"use client";

import { GlassCard } from "../ui/glass-card";

const industries = [
  { name: "E-commerce", description: "Automatización de atención al cliente y gestión de pedidos" },
  { name: "Educación", description: "Asistentes virtuales y análisis de datos educativos" },
  { name: "Salud", description: "Soluciones para agendamiento y análisis médico" },
  { name: "Inmobiliaria", description: "Automatización de leads y seguimiento" },
  { name: "Marketing Digital", description: "Optimización de campañas en tiempo real" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sectores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <GlassCard key={index} className="hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{industry.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}