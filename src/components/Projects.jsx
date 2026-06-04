import { motion } from "framer-motion";
import { ExternalLink} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "LigaPro",
    description:
      "Plataforma para gerenciamento de campeonatos esportivos amadores, permitindo controle de equipes, atletas, partidas, classificação e estatísticas.",
    techs: ["React", "Spring Boot", "MongoDB"],
    status: "TCC • Em desenvolvimento",
    image: "/images/ligapro-preview.png",
  },
  {
    title: "Agenda para Eventos de cobertura de Midia",
    description:
      "Sistema para organização e gerenciamento de eventos de cobertura de mídia, facilitando a coordenação de atividades, recursos e comunicação entre equipes.",
    techs: ["React Native", "Java"],
    status: "Concluído",
    image: "/images/Agenda para Eventos de cobertura de Midia.png",
  },
  {
    title: "Sistema de Formalização de ETP e DFD",
    description:
      "Plataforma voltada para auxiliar na elaboração e gerenciamento de Estudos Técnicos Preliminares (ETP) e Documentos de Formalização da Demanda (DFD).",
    techs: ["React", "Spring Boot", "MySQL"],
    status: "Concluído",
    image: "/images/Sistema de Formalização de ETP e DFD.png",
  },
  {
    title: "DietaAPP",
    description:
      "Aplicativo voltado para acompanhamento alimentar, organização de refeições e controle nutricional.",
    techs: ["React Native", "Expo"],
    status: "Concluído",
    image: "/images/DietaAPP.png",
  },
  {
    title: "Games360",
    description:
      "Projeto desenvolvido para consulta e exploração de informações sobre jogos, com foco em experiência do usuário e organização de conteúdo.",
    techs: ["React", "API REST"],
    status: "Concluído",
    image: "/images/Games360.png",
  },
  {
    title: "App para Agendamento de Consultas Médicas",
    description:
      "Aplicativo para facilitar o agendamento de consultas médicas, com interface intuitiva e funcionalidades de gerenciamento de horários.",  
    techs: ["React Native", "Firebase"],
    status: "Concluído",
    image: "/images/App para Agendamento de Consultas Médicas.png",
  }
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="text-center mb-20"
      >
        <span className="text-green-400 uppercase tracking-widest text-sm">
          Portfólio
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          Projetos Desenvolvidos
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
          Alguns dos projetos que desenvolvi durante minha
          trajetória de aprendizado e evolução na área de tecnologia.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/60
            "
          >
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-slate-800
                      text-sm
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-green-400
                  "
                >
                  <FaGithub />
                  Código
                </button>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-green-400
                  "
                >
                  <ExternalLink size={18} />
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}