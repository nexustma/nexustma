"use client";

import { Mail, Phone } from "lucide-react";
import { GlassCard } from "../ui/glass-card";
import { Button } from "../ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-md mx-auto">
          <GlassCard className="text-center">
            <div className="flex flex-col items-center gap-4">
              <Button className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <Link href="https://wa.me/18297721111" target="_blank">
                  Envíame un mensaje
                </Link>
              </Button>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:nexustma@gmail.com"
                    className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-200"
                  >
                    nexustma@gmail.com
                  </a>{" "}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
