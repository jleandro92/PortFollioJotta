import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green-400 text-sm uppercase tracking-widest">
              Developer • Designer • Creator
            </span>

            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-tight">
              JOTTA
            </h1>

            <h2 className="mt-4 text-2xl md:text-4xl text-slate-300 font-light">
              Criando experiências digitais modernas.
            </h2>

            <p className="mt-6 text-slate-400 max-w-xl">
              Desenvolvedor Full Stack apaixonado por tecnologia,
              design e construção de soluções digitais que unem
              performance, usabilidade e criatividade.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projetos"
                className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                Ver Projetos
                <ArrowRight size={18} />
              </a>

              <a
                href="#contato"
                className="border border-slate-700 hover:border-green-500 transition px-6 py-3 rounded-xl"
              >
                Contato
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-800 blur-3xl opacity-20 rounded-full" />

              <img
                src="/images/profile.png"
                alt="Jotta"
                className="w-[320px] md:w-105 rounded-3xl border border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}