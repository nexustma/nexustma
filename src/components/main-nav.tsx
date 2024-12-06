"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export function MainNav() {
  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center ">
            <Image
              src="/logo1.png"
              width={54}
              height={54}
              alt="Logo"
              // shadow border image
              className=""
              // className="h-6 w-6"
            />
            <span className="text-xl font-bold">Nexus TMA</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              Inicio
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              Privacidad
            </Link>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link href="https://chatbox-gray.vercel.app" target="_blank">
                ChatBox
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
