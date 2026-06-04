import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Code2,
  Lightbulb,
} from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "LigaPro",
    description:
      "Desenvolvimento do meu Trabalho de Conclusão de Curso, uma plataforma para gestão de campeonatos esportivos amadores.",
  },
  {
    icon: GraduationCap,
    title: "Graduação em TADS",
    description:
      "Aprimorando conhecimentos em análise, desenvolvimento de sistemas e boas práticas de software.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Evoluindo constantemente em React, React Native, TypeScript, Java e Spring Boot.",
  },
  {
    icon: Lightbulb,
    title: "Novas Ideias",
    description:
      "Explorando soluções digitais e projetos que possam gerar impacto real para usuários e organizações.",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section
      id="atualmente"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-green-400 uppercase tracking-widest text-sm">
          Atualmente
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          O Que Estou Construindo
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
          Minha jornada continua em constante evolução.
          Estes são alguns dos projetos, estudos e objetivos
          que fazem parte do meu momento atual.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-slate-900/60
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-green-500
                transition-all
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-green-500/10
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <Icon
                  size={28}
                  className="text-green-400"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}