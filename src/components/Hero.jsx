import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Radio } from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: Code2,
      label: "Full Stack",
    },
    {
      icon: Layers,
      label: "UI Design",
    },
    {
      icon: Radio,
      label: "Tempo real",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
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
              JOTTA<span className="text-green-400">.</span>
            </h1>

            <h2 className="mt-4 text-2xl md:text-4xl text-slate-300 font-light">
              Construindo produtos digitais com código, design e propósito.
            </h2>

            <p className="mt-6 text-slate-400 max-w-xl leading-8">
              Desenvolvedor Full Stack em formação e designer criativo,
              focado em transformar ideias em interfaces bem resolvidas,
              sistemas funcionais e experiências digitais com identidade.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border border-slate-800
                      bg-slate-900/60
                      px-4 py-2
                      text-sm
                      text-slate-300
                    "
                  >
                    <Icon
                      size={16}
                      className="text-green-400"
                    />
                    {item.label}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projetos"
                className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-black"
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
              <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full" />

              <img
                src="/images/profile.png"
                alt="Jotta"
                className="w-[320px] md:w-105 rounded-3xl border border-slate-800 shadow-2xl"
              />

              <div
                className="
                  absolute
                  -bottom-6
                  left-1/2
                  -translate-x-1/2
                  w-[88%]
                  rounded-2xl
                  border border-green-500/30
                  bg-slate-950/90
                  px-5 py-4
                  backdrop-blur
                  shadow-2xl
                  shadow-green-500/10
                "
              >
                <p className="text-xs uppercase tracking-widest text-green-400">
                  Projeto em foco
                </p>
                <p className="mt-1 font-semibold text-slate-100">
                  TCC: pedidos de pizzaria com Spring Boot, React e WebSocket
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
