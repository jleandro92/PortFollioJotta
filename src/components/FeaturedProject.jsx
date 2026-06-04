import { motion } from "framer-motion";
import { Trophy, GraduationCap, Clock } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section
      id="ligapro"
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
          LigaPro ⚽
        </h2>

        <p className="mt-6 text-slate-400 max-w-4xl mx-auto leading-8">
          Plataforma completa para gestão de ligas, campeonatos e equipes de
          futebol amador. Desenvolvida como Trabalho de Conclusão de Curso,
          unindo desenvolvimento web, mobile, backend, banco de dados e design
          em uma única solução.
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
          <div className="space-y-8">
            <div className="flex gap-4">
              <GraduationCap
                size={30}
                className="text-green-400 mt-1"
              />

              <div>
                <h3 className="font-bold text-xl">
                  Projeto de Conclusão de Curso
                </h3>

                <p className="text-slate-400">
                  Tecnologia em Análise e Desenvolvimento de Sistemas
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Trophy
                size={30}
                className="text-green-400 mt-1"
              />

              <div>
                <h3 className="font-bold text-xl">
                  Gestão Esportiva
                </h3>

                <p className="text-slate-400">
                  Controle de campeonatos, equipes, atletas, partidas,
                  classificação e estatísticas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock
                size={30}
                className="text-green-400 mt-1"
              />

              <div>
                <h3 className="font-bold text-xl">
                  Status Atual
                </h3>

                <p className="text-slate-400">
                  Em desenvolvimento 🚧
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="font-bold text-xl mb-4">
              Objetivo do Projeto
            </h4>

            <p className="text-slate-400 leading-8">
              O LigaPro nasceu com o propósito de modernizar a gestão de
              campeonatos esportivos amadores, oferecendo uma plataforma única
              para organizadores, equipes, atletas e torcedores acompanharem
              todas as informações da competição em tempo real.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "React",
              "Spring Boot",
              "MongoDB",
              "TypeScript",
              "UI/UX",
              "REST API",
            ].map((tech) => (
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
              src="/images/ligapro-preview.png"
              alt="LigaPro"
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
                100%
              </h4>

              <p className="text-sm text-slate-400">
                Requisitos
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
              <h4 className="text-2xl font-bold text-green-400">
                6+
              </h4>

              <p className="text-sm text-slate-400">
                Módulos
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
              <h4 className="text-2xl font-bold text-green-400">
                TCC
              </h4>

              <p className="text-sm text-slate-400">
                Projeto Principal
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progresso */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Evolução do Projeto
        </h3>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            ["Levantamento de Requisitos", "100%"],
            ["Modelagem do Banco de Dados", "100%"],
            ["Protótipo UI/UX", "95%"],
            ["Frontend Web", "70%"],
            ["Backend API", "60%"],
            ["Aplicativo Mobile", "40%"],
          ].map(([label, progress]) => (
            <div key={label}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">
                  {label}
                </span>

                <span className="text-green-400">
                  {progress}
                </span>
              </div>

              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: progress,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}