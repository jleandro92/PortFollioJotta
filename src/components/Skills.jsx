import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Server,
  Database,
  Palette,
} from "lucide-react";

const skills = [
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    techs: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    techs: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST API",
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    techs: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    techs: [
      "Photoshop",
      "CorelDRAW",
      "Figma",
      "UI Design",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Habilidades
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          Tecnologias & Ferramentas
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
          Ferramentas e tecnologias que utilizo para criar
          aplicações modernas, funcionais e visualmente
          atraentes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
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
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-green-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={28}
                    className="text-green-400"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {skill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-slate-800
                      text-slate-300
                      text-sm
                      hover:bg-green-500
                      hover:text-black
                      transition-all
                      cursor-default
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}