"use client";

import {
  Bot,
  Brain,
  Building2,
  Code2,
  FileSearch,
  LineChart,
  Workflow,
} from "lucide-react";
import { GlassCard } from "../ui/glass-card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Desarrollo de asistentes virtuales avanzados",
  },
  {
    icon: Workflow,
    title: "Automatización RPA",
    description: "Procesos empresariales optimizados con IA",
  },
  {
    icon: LineChart,
    title: "Análisis Predictivo",
    description: "Sistemas de análisis y predicción de datos",
  },
  {
    icon: Brain,
    title: "Flujos de Trabajo",
    description: "Personalización de procesos automatizados",
  },
  {
    icon: Building2,
    title: "Consultoría Digital",
    description: "Asesoramiento en transformación digital",
  },
  {
    icon: Code2,
    title: "Integración API",
    description: "Conexión de sistemas con IA",
  },
  {
    icon: FileSearch,
    title: "Procesamiento de Datos",
    description: "Reconocimiento y análisis inteligente",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="hover:scale-[1.02] transition-transform">
                <service.icon className="w-12 h-12 mb-4 text-neutral-700 dark:text-neutral-200" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
