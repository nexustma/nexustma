"use client";

import { Mail, Phone } from "lucide-react";
import { GlassCard } from "../ui/glass-card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-md mx-auto">
          <GlassCard className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                <span>829-772-1111</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                <a href="mailto:nexustma@gmail.com" className="hover:text-neutral-700 dark:hover:text-neutral-200">
                  nexustma@gmail.com
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}