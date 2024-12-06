"use client";

import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ContactSection />
    </main>
  );
}
