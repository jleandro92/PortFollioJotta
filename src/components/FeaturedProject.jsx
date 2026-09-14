import { motion } from "framer-motion";
import {
  ClipboardList,
  GraduationCap,
  Pizza,
  Radio,
  ShieldCheck,
} from "lucide-react";

export default function FeaturedProject() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Trabalho de Conclusão de Curso",
      description:
        "Projeto acadêmico em desenvolvimento para aplicar backend, frontend, banco de dados e experiência de uso em um cenário real.",
    },
    {
      icon: ClipboardList,
      title: "Gestão de Pedidos",
      description:
        "Fluxo pensado para acompanhar pedidos da pizzaria, organizar status e apoiar a operação no atendimento.",
    },
    {
      icon: Radio,
      title: "Comunicação em Tempo Real",
      description:
        "Uso de WebSocket para aproximar o sistema de uma experiência mais dinâmica no acompanhamento dos pedidos.",
    },
    {
      icon: ShieldCheck,
      title: "Autenticação",
      description:
        "Estrutura com acesso autenticado para proteger áreas internas e separar melhor as responsabilidades do sistema.",
    },
  ];

  const techs = [
    "Java",
    "Spring Boot",
    "MongoDB",
    "React",
    "WebSocket",
    "UI/UX",
  ];

  return (
    <section
      id="tcc-pizzaria"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-green-400 uppercase tracking-widest text-sm">
          Projeto em Destaque
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          Plataforma de Pedidos para Pizzaria
        </h2>

        <p className="mt-6 text-slate-400 max-w-4xl mx-auto leading-8">
          Trabalho de Conclusão de Curso focado no gerenciamento de pedidos de
          uma pizzaria, reunindo autenticação, organização operacional e
          comunicação em tempo real com uma interface escura, direta e moderna.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Informações */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border border-slate-800
                    bg-slate-900/60
                    p-5
                    hover:border-green-500/70
                    transition-all
                  "
                >
                  <Icon
                    size={28}
                    className="text-green-400 mb-4"
                  />

                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mt-3 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h4 className="font-bold text-xl mb-4">
              Objetivo do Projeto
            </h4>

            <p className="text-slate-400 leading-8">
              A proposta é criar uma solução prática para centralizar os pedidos
              de uma pizzaria, melhorar a visibilidade do andamento de cada
              solicitação e conectar a experiência do usuário com uma base
              técnica sólida em Java, Spring Boot, MongoDB, React e WebSocket.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {techs.map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2
                  rounded-full
                  bg-slate-800
                  border border-slate-700
                  text-slate-300
                  hover:border-green-500
                  transition-all
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              shadow-2xl
              shadow-green-500/10
            "
          >
            <img
              src="/images/pizzaria-preview.svg"
              alt="Preview visual da plataforma de pedidos para pizzaria"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
              <h4 className="text-2xl font-bold text-green-400">
                TCC
              </h4>

              <p className="text-sm text-slate-400">
                Projeto Principal
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
              <h4 className="text-2xl font-bold text-green-400">
                5
              </h4>

              <p className="text-sm text-slate-400">
                Tecnologias
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
              <h4 className="text-2xl font-bold text-green-400 flex justify-center">
                <Pizza />
              </h4>

              <p className="text-sm text-slate-400">
                Pedidos
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Frentes do projeto */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Frentes do Projeto
        </h3>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {[
            "Autenticação e acesso ao sistema",
            "Cadastro e acompanhamento de pedidos",
            "Backend com Java, Spring Boot e MongoDB",
            "Atualizações em tempo real com WebSocket",
          ].map((label, index) => (
            <div
              key={label}
              className="
                rounded-2xl
                border border-slate-800
                bg-slate-900/50
                p-5
                text-slate-300
              "
            >
              <span className="text-green-400 font-bold">
                0{index + 1}.
              </span>{" "}
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
