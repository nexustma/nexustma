"use client";
// import Spline from "@splinetool/react-spline/next";

import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
// import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState } from "react";

// const SplineComponent = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-full flex items-center justify-center">
//       <div className="animate-pulse bg-neutral-100 dark:bg-neutral-800 rounded-lg w-full h-full" />
//     </div>
//   ),
// });

export function HeroSection() {
  // const [splineError, setSplineError] = useState(false);

  // const handleSplineError = () => {
  //   setSplineError(true);
  // };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="container relative mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-950 dark:from-white dark:via-neutral-400 dark:to-white">
              Transformando Negocios con IA
            </h1>
            <p className="text-xl mb-8 text-neutral-600 dark:text-neutral-300">
              Nexus TMA especializa en soluciones de automatización impulsadas
              por inteligencia artificial para optimizar sus procesos
              empresariales.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 dark:text-black"
                asChild
              >
                <Link href="#contact">
                  Contáctanos <ChevronRight className="ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm"
                asChild
              >
                <Link href="https://chatbox-gray.vercel.app" target="_blank">
                  Probar ChatBox <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            // className="relative h-[600px] hidden lg:block"
          >
            {/* <Spline scene="https://prod.spline.design/PtRAygcP-Ttp0lQI/scene.splinecode" /> */}
            {/* <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse bg-neutral-100 dark:bg-neutral-800 rounded-lg w-full h-full" />
            </div> */}
            {/* {!splineError ? (
              <SplineComponent
                scene="https://prod.spline.design/PtRAygcP-Ttp0lQI/scene.splinecode"
                onError={handleSplineError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <div className="text-center p-8">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Visualización 3D no disponible
                  </p>
                </div>
              </div>
            )} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// export default function Home() {
//   return (
//     <main>
//       <Spline scene="https://prod.spline.design/PtRAygcP-Ttp0lQI/scene.splinecode" />
//     </main>
//   );
// }
