"use client";

import React from "react";

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-12">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
            &copy; {new Date().getFullYear()} Nexus TMA. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
